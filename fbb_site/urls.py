from django.conf.urls import url

from .views import get_all_lectoriums, get_five_last_lectoriums, get_publications_by_date, get_publication_by_id


urlpatterns = [
    url(r'^get_all_lectoriums/$', get_all_lectoriums, name="get_all_lectoriums"),
    url(r'^get_five_last_lectoriums/$', get_five_last_lectoriums, name="get_five_last_lectoriums"),
    url(r'^get_publications_by_date/(?P<year>[0-9]+)/$', get_publications_by_date, name="get_publications_by_date"),
    url(r'^get_publication_by_id/(?P<id>[0-9]+)/$', get_publication_by_id, name="get_publication_by_id")
]
