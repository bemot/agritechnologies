from django.urls import path

from .views import index, OperationDetailView
from .views import index, TechnologieDetailView

urlpatterns = [
    path('', index),
    path('operations', index),
    path('operations/edit/<int:pk>', OperationDetailView.as_view()),
    path('operations/delete/<int:pk>', OperationDetailView.as_view()),
    path('technologies', index),
    path('technologies/edit/<int:pk>', TechnologieDetailView.as_view()),
    path('technologies/delete/<int:pk>', TechnologieDetailView.as_view()),

]
