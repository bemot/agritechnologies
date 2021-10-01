from django.urls import path

from .views import index, OperationDetailView
from .views import index, TechnologieDetailView
from .views import index, VariableDetailView

urlpatterns = [
    path('', index),
    path('operations', index),
    path('operations/edit/<int:pk>', OperationDetailView.as_view()),
    path('operations/delete/<int:pk>', OperationDetailView.as_view()),
    path('technologies', index),
    path('technologies/edit/<int:pk>', TechnologieDetailView.as_view()),
    path('technologies/delete/<int:pk>', TechnologieDetailView.as_view()),
    path('variables', index),
    path('variables/edit/<int:pk>', VariableDetailView.as_view()),
    path('variables/delete/<int:pk>', VariableDetailView.as_view()),


]
