# How to setup cloned project on Debian-based systems

Cloning project

**git clone git@gitlab.com:insilicoteam/pandora.git** (if you have your ssh key set up in the option panel)<br />
**git clone https://gitlab.com/insilicoteam/pandora.git** (in other case)


Cd to project directory

**cd pandora**


Create virutal env & activate it

**sudo apt-get install virtualenv** (install virtualenv package)<br />
**virtualenv env --no-site-packages** (setup virtualenv in your project directory)<br />
**source env/bin/activate** (activate it)


Install project dependencies

**pip install -U --timeout 1000 -r requirements.txt** 


Install && create postgres database

**sudo apt-get install postgresql** (install postgres)<br />
**sudo service postgresql start** (start postgresDB server)<br />
**sudo -su postgres** (login in root)<br />
**createuser NAME -P -S -R -D** (add new user)<br />
**createdb -O USERNAME DBNAME**


Creating && set up config file

**mkdir conf | touch conf/pandora.conf** <br />
*[main]*<br />
*SECRET_KEY: SECRET_KEY (Can be generated http://www.miniwebtool.com/django-secret-key-generator/)*<br />
<br />
*[database]*<br />
*NAME: pandora (DBNAME)*<br />
*USER: pandora (USERNAME)*<br />
*PASSWORD: pandora (USERPASSOWRD)*<br />
*HOST: 127.0.0.1*<br />
*PORT: 5432*<br />



Migrating database 

**python manage.py migrate**


Collecting static 

**python manage.py collectstatic**


Adding path to static into conf

*[static]<br />
STATIC_ROOT: ABSOLUTE_PATH_TO_COLLECTED_STATIC_DIR_IN_YOUR_PROJECT* (add this to conf/pandora.conf)


Installing nodejs && npm

**sudo apt-get install nodejs**


Installing npm packages && webpack

**npm install**<br />
**npm install webpack**<br />


Running server

**node webpack_dev_server.js**<br />
**python manage.py runserver** (in another terminal window, results can be seen on 127.0.0.1:8000 in web browser)