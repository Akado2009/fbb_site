from django.contrib import admin
from django.contrib.admin import ModelAdmin
from .models import Lectorium, Publication


admin.site.register(Lectorium)
admin.site.register(Publication)