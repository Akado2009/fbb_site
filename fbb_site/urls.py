from django.conf.urls import url

from .views import get_lectoriums, get_publications_by_date, get_publication_by_id, \
                   get_faqs, get_feedback, create_feedback, get_news


urlpatterns = [
    url(r'^get_lectoriums/$', get_lectoriums, name="get_all_lectoriums"),
    url(r'^get_lectoriums/(?P<number>[0-9]+)/$', get_lectoriums, name="get_lectoriums"),
    url(r'^get_publications_by_date/(?P<year>[0-9]+)/$', get_publications_by_date, name="get_publications_by_date"),
    url(r'^get_publication_by_id/(?P<id>[0-9]+)/$', get_publication_by_id, name="get_publication_by_id"),
    url(r'^get_faqs/$', get_faqs, name="get_faqs"),
    url(r'^get_feedback/$', get_feedback, name="get_feedback"),
    url(r'^create_feedback/$', create_feedback, name="create_feedback"),
    url(r'^get_news/$', get_news, name="get_news"),
    url(r'^get_news/(?P<number>[0-9]+)/$', get_news, name="get_news"),
]
