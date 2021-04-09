from django.urls import path

from .views import index, OperationDetailView

urlpatterns = [
    path('', index),
    path('edit/<int:pk>', OperationDetailView.as_view()),
    path('delete/<int:pk>', OperationDetailView.as_view()),
]
