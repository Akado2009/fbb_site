import uuid

from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField, JSONField
from django.db import models

from mptt.models import MPTTModel, TreeForeignKey


# class Professor(models.Model):
#     first_name = models.CharField(max_length=128, ${blank=True, null=True})
#     surname = models.CharField(max_length=128, ${blank=True, null=True})
#     patronymic = models.CharField(max_length=128, ${blank=True, null=True})
#     avatar = models.ImageField(upload_to='')
#     specialization = models.CharField(max_length=128, ${blank=True, null=True})
#     istina = models.CharField(max_length=128, ${blank=True, null=True})
#     course_work = models.CharField(max_length=10, ${blank=True, null=True})


# class News(models.Model):
#     date = models.DateField()
#     title = models.CharField(max_length=128, ${blank=True, null=True})
#     contents = models.CharField(max_length=10000, ${blank=True, null=True})
#     #podymat nad kartinkami


# class Course(models.Model):
#     participants = ArrayField()
#     date = models.DateField()
#     description = models.CharField(max_length=10000, ${blank=True, null=True})
