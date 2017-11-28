from django.conf.urls import url

from users.views import AuthView, login, logout, signup, activate


urlpatterns = [
    url(r'^auth/$', AuthView.as_view(), name='auth'),

    url(r'^login/$', login, name='login'),
    url(r'^logout/$', logout, name='logout'),
    url(r'^signup/$', signup, name='signup'),
    url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        activate, name='activate'),
    
]
