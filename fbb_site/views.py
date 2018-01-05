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

from .models import Lectorium, Publication, SimpleFeedback, FeedbackFAQ, News


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


class FeedbackView(TemplateView):
    template_name = 'fbb_site/feedback.html'


class NewsView(TemplateView):
    template_name = 'fbb_site/news.html'

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

def get_lectoriums(request, number=None):
    lectoriums = Lectorium.objects.all()
    data = []
    for lectorium in lectoriums:
        data.append([lectorium.date, lectorium.professor, lectorium.name])
    data = sorted(data, key=lambda x: x[0], reverse=True)
    if number:
        number = int(number)
        new_data = []
        for i in range(number):
            current_info = {}
            current_info['professor'] = data[i][1]
            current_info['name'] = data[i][2]
            current_info['day'], current_info['month'], current_info['year'] = data[i][0].day, data[i][0].month, data[i][0].year
            current_info['rus_month'] = RUSSIAN_MONTH[str(current_info['month'])]
            current_info['year'] = current_info['year'] % 100
            new_data.append(current_info)
        return JsonResponse({ 'data': new_data })
    return JsonResponse({ 'data': data })

def get_news(request, number=None):
    news = News.objects.all()
    data = []
    for _news in news:
        data.append([_news.created_at, _news.name, _news.abstract, _news.content])
    data = sorted(data, key= lambda x: x[0], reverse=True)
    if number:
        number = int(number)
        data = data[0: number]
    new_data = []
    for _news in data: 
        current_info = {}
        current_info['name'] = _news[1]
        current_info['abstract'] = _news[2]
        current_info['content'] = _news[3]
        current_info['day'], current_info['month'], current_info['year'] = _news[0].day, _news[0].month, _news[0].year
        current_info['rus_month'] = RUSSIAN_MONTH[str(current_info['month'])]
        current_info['year'] = current_info['year'] % 100
        new_data.append(current_info)
    return JsonResponse({ 'data': new_data })

def get_publications_by_date(request, year):

    publications = Publication.objects.all().filter(year=year).values(
            'id', 'name', 'authors', 'journal', 'pubmed_link', 'doi_link'
        )

    return JsonResponse({ 'data' : list(publications) })

def get_publication_by_id(request, id):
    
    publication = Publication.objects.get(id=id)
    return_publication = {
        'name': publication.name,
        'authors': publication.authors,
        'abstract': publication.abstract,
        'journal': publication.journal,
        'pubmed_link': publication.pubmed_link,
        'doi_link': publication.doi_link
    }

    return JsonResponse({ 'data' : return_publication})

def get_faqs(request):

    faqs = FeedbackFAQ.objects.all().values('question', 'answer', 'id')

    return JsonResponse({ 'data' : list(faqs)[::-1] })

def get_feedback(request):
    
    feedback = SimpleFeedback.objects.all().values('id', 'author', 'content')
    
    return JsonResponse({ 'data' : list(feedback)[::-1] })

def create_feedback(request):
    new_feedback = SimpleFeedback(author=request.POST.get("author"), content=request.POST.get("content"))
    new_feedback.save()

    return JsonResponse({ 'success': 'success' })

