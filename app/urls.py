from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth.decorators import login_required

from fbb_site.views import IndexView, ApplyView, ContactsViews, AboutView, PhdView, LectureView, ScienceView, StudentsView, ProfileView


urlpatterns = [
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^apply/$', ApplyView.as_view(), name='apply'),
    url(r'^contacts/$', ContactsViews.as_view(), name='contacts'),
    url(r'^about/$', AboutView.as_view(), name='about'),
    url(r'^phd/$', PhdView.as_view(), name='phd'),
    url(r'^lecture/$', LectureView.as_view(), name='lecture'),
    url(r'^science/$', ScienceView.as_view(), name='science'),
    url(r'^students/$', StudentsView.as_view(), name='students'),
    url(r'^profile/$', ProfileView.as_view(), name='profile'),
    url(r'^users/', include('users.urls', namespace='users')),
    url(r'^admin/', admin.site.urls),

    url(r'^fbb_site/', include('fbb_site.urls', namespace='fbb_site')),
]


if settings.DEBUG:
    import debug_toolbar

    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ] \
    + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) \
    + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
