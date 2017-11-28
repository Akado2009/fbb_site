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


class IndexView(TemplateView):
    template_name = 'pandora/index.html'


