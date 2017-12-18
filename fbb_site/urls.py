from django.conf.urls import url

from .views import get_all_lectoriums, get_five_last_lectoriums


urlpatterns = [
    url(r'^get_all_lectoriums/$', get_all_lectoriums, name="get_all_lectoriums"),
    url(r'^get_five_last_lectoriums/$', get_five_last_lectoriums, name="get_five_last_lectoriums")
]
