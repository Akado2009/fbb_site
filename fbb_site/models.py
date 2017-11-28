import uuid

from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField, JSONField
from django.db import models

from mptt.models import MPTTModel, TreeForeignKey

