from django.urls import path

from .views import index, TechnologieDetailView

urlpatterns = [
    path('', index),
    path('edit/<int:pk>', TechnologieDetailView.as_view()),
    path('delete/<int:pk>', TechnologieDetailView.as_view()),
]
