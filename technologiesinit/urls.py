"""
technologiesinit URL Configuration
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/', include('technologies.api.urls')),
    path('admin/', admin.site.urls),
    path('photologue/',include('photologue.urls')),
    path('', TemplateView.as_view(template_name="homepage.html"), name='homepage'),
    path('pictures/', TemplateView.as_view(template_name="homepage.html"), name='pictures'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
