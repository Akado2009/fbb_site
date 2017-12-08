from django.contrib.auth import authenticate, login as django_login, logout as django_logout, get_user_model
from django.http import JsonResponse
from django.views.generic import TemplateView

from rest_framework import generics as drf_generics
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import SignupForm
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from .tokens import account_activation_token
from django.contrib.auth.models import User
from django.core.mail import EmailMessage


class AuthView(TemplateView):
    template_name = 'users/auth.html'

def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False
            user.save()
            current_site = get_current_site(request)
            message = render_to_string('users/acc_active_email.html', {
                'user': user, 
                'domain': '127.0.0.1:8000',
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': account_activation_token.make_token(user),
            })
            mail_subject = 'Activate your account.'
            to_email = form.cleaned_data.get('email')
            email = EmailMessage(mail_subject, message, to=[to_email])
            email.send()
            print('ready')
            return HttpResponse('Please confirm your email address to complete the registration')
    
    else:
        form = SignupForm()
    
    return JsonResponse({'succes': 'succes'})

def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        user.backend = 'django.contrib.auth.backends.ModelBackend'
        django_login(request, user)
        # return redirect('home')
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')
    else:
        return HttpResponse('Activation link is invalid!')


def login(request):
    if request.method == 'POST':

        username = request.POST.get('username')
        password1 = request.POST.get('password1')
        user = authenticate(username=username, password=password1)
        print(user)
        if user:
            django_login(request, user)
            return JsonResponse({'response': 'success'})

        return JsonResponse({'response': 'error'})


def logout(request):
    print(100)
    print(request)
    django_logout(request)
    return JsonResponse({'response': 'success'})
