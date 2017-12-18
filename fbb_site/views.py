import itertools
import json
import os
import copy
import ast
import random

from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.core.files.base import ContentFile
from django.db.models import FloatField, Q
from django.db.models.functions import Cast
from django.http import JsonResponse
from django.views.generic import TemplateView
from django.contrib.auth.models import User

from rest_framework import viewsets

from .models import Lectorium


class IndexView(TemplateView):
    template_name = 'fbb_site/index.html'


class ApplyView(TemplateView):
    template_name = 'fbb_site/apply.html'


class ContactsViews(TemplateView):
    template_name = 'fbb_site/contacts.html'


class AboutView(TemplateView):
    template_name = 'fbb_site/about.html'


class PhdView(TemplateView):
    template_name = 'fbb_site/phd.html'


class LectureView(TemplateView):
    template_name = 'fbb_site/lecture.html'


class ScienceView(TemplateView):
    template_name = 'fbb_site/science.html'


class StudentsView(TemplateView):
    template_name = 'fbb_site/students.html'


class ProfileView(TemplateView):
    template_name = 'fbb_site/profile.html'

def get_all_lectoriums(request):
    lectoriums = Lectorium.objects.all()
    data = []
    for lectorium in lectoriums:
        data.append([lectorium.date, lectorium.professor, lectorium.name])
    data = sorted(data, key=lambda x: x[0], reverse=True)
    return JsonResponse({ 'data': data })


RUSSIAN_MONTH = {
    '1': 'Января',
    '2': 'Февраля',
    '3': 'Марта',
    '4': 'Апреля',
    '5': 'Мая',
    '6': 'Июня',
    '7': 'Июля',
    '8': 'Августа',
    '9': 'Сентября',
    '10': 'Октября',
    '11': 'Ноября',
    '12': 'Декабря',
}

ENGLISH_MONTH = {
    '1': 'January',
    '2': 'February',
    '3': 'March',
    '4': 'April',
    '5': 'May',
    '6': 'June',
    '7': 'July',
    '8': 'August',
    '9': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'Decembre',
}


def get_five_last_lectoriums(request):
    lectoriums = Lectorium.objects.all()
    data = []
    for lectorium in lectoriums:
        data.append([lectorium.date, lectorium.professor, lectorium.name])
    data = sorted(data, key=lambda x: x[0], reverse=True)
    new_data = []
    for i in range(5):
        current_info = {}
        current_info['professor'] = data[i][1]
        current_info['name'] = data[i][2]
        current_info['day'], current_info['month'], current_info['year'] = data[i][0].day, data[i][0].month, data[i][0].year
        current_info['rus_month'] = RUSSIAN_MONTH[str(current_info['month'])]
        current_info['year'] = current_info['year'] % 100
        new_data.append(current_info)

    return JsonResponse({ 'data' : new_data})