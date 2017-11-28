#!/bin/sh

python /fbb_site/manage.py collectstatic --noinput
python /fbb_site/manage.py migrate --noinput

uwsgi --ini /fbb_site/deploy/uwsgi.ini

while true; do sleep 1000; done
