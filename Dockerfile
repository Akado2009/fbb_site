FROM python:3.6
MAINTAINER Alexander Zhebrak <zhebrak@insilicomedicine.com>

RUN pip3 install -U pip setuptools
RUN pip3 install uwsgi

ADD . /pandora

ENV DJANGO_SETTINGS_MODULE app.settings

# Install R for rpy2
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9
RUN apt-get update
RUN apt-get install -y r-base

# Install R packages' dependencies
RUN apt-get install -y libxml2-dev
RUN apt-get install -y libssl-dev

# Install R packages
RUN /usr/bin/Rscript /pandora/deploy/install_requirements.R

RUN pip3 install -r /pandora/requirements.txt

WORKDIR /pandora
