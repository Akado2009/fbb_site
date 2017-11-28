from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth.decorators import login_required

from fbb_site.views import IndexView


urlpatterns = [
    url(r'^$', login_required(IndexView.as_view()), name='index'),
    url(r'^users/', include('users.urls', namespace='users')),
    url(r'^admin/', admin.site.urls),
]


if settings.DEBUG:
    import debug_toolbar

    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ] \
    + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) \
    + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
