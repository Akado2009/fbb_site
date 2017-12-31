from django.contrib import admin
from django.contrib.admin import ModelAdmin
from .models import Lectorium, Publication, SimpleFeedback, FeedbackFAQ


admin.site.register(Lectorium)
admin.site.register(Publication)
admin.site.register(SimpleFeedback)
admin.site.register(FeedbackFAQ)