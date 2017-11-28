import configparser
import os
from kombu import Exchange, Queue
import raven

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

config_dev_path = os.path.join(BASE_DIR, 'deploy/fbb_dev.conf')
config_prod_path = '/etc/fbb/fbb.conf'

config = configparser.RawConfigParser()
config.read((config_dev_path, config_prod_path))

_config_check = lambda x, y: config.has_section(x) and config.has_option(x, y)
config_get = lambda x, y, z=None: _config_check(x, y) and config.get(x, y) or z

SECRET_KEY = config_get('main', 'SECRET_KEY')

DEBUG = False

ALLOWED_HOSTS = ['*']


PROJECT_APPS = [
    'api',
    'fbb_site',
    'users'
]

THIRD_PARTY_APPS = [
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'debug_toolbar',
    'mptt',
    'rest_framework',
    'webpack_loader',
]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'raven.contrib.django.raven_compat',
] + PROJECT_APPS + THIRD_PARTY_APPS

MIDDLEWARE = [
    'django.middleware.gzip.GZipMiddleware',
    'debug_toolbar.middleware.DebugToolbarMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend'
]

ROOT_URLCONF = 'app.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth'
            ],
        },
    },
]

WSGI_APPLICATION = 'app.wsgi.application'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config_get('database', 'NAME'),
        'USER': config_get('database', 'USER'),
        'PASSWORD': config_get('database', 'PASSWORD'),
        'HOST': config_get('database', 'HOST'),
        'PORT': config_get('database', 'PORT'),
    }
}


LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'fbb.msu.general@gmail.com'
EMAIL_HOST_PASSWORD = 'google06'
EMAIL_PORT = 587

STATIC_URL = '/static/'
STATIC_ROOT = config_get('static', 'STATIC_ROOT')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]

MEDIA_URL = '/media/'
MEDIA_ROOT = config_get('media', 'MEDIA_ROOT')

LOGIN_URL = '/users/auth/'
LOGIN_REDIRECT_URL = '/'

SITE_ID = 1

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats-prod.json'),
    }
}