from django.urls import path
from . import views


from .views import index, OperationDetailView
from .views import index, TechnologieDetailView
from .views import index, VariableDetailView
from .views import index, UnitDetailView
from .views import index, MachineDetailView

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
    path('units', index),
    path('units/edit/<int:pk>', UnitDetailView.as_view()),
    path('units/delete/<int:pk>', UnitDetailView.as_view()),
    path('machines', index),
    path('machines/edit/<int:pk>', MachineDetailView.as_view()),
    path('machines/delete/<int:pk>', MachineDetailView.as_view()),

    path('reports/techs-report',index),
    path('reports/opers-report',index),





]
