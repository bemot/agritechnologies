from django.shortcuts import render
from django.views.generic.detail import DetailView

from technologies.models import Technologie, Variable, Unit
from technologies.models import Operation, Machine, PowerUnit
from photologue.models import Photo
def index(request):
    return render(request, 'frontend/index.html')

class TechnologieDetailView(DetailView):
    model = Technologie
    template_name = 'frontend/index.html'

class OperationDetailView(DetailView):
    model = Operation
    template_name = 'frontend/index.html'


class VariableDetailView(DetailView):
    model = Variable
    template_name = 'frontend/index.html'

class UnitDetailView(DetailView):
    model = Unit
    template_name = 'frontend/index.html'

class MachineDetailView(DetailView):
    model= Machine
    template_name = 'frontend/index.html'

class PowerunitDetailView(DetailView):
    model= PowerUnit
    template_name = 'frontend/index.html'

class PhotoDetailView(DetailView):
    model= Photo
    template_name = 'frontend/index.html'   
