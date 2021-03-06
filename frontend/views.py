from django.shortcuts import render
from django.views.generic.detail import DetailView

from technologies.models import Technologie
from technologies.models import Operation

def index(request):
    return render(request, 'frontend/index.html')


class TechnologieDetailView(DetailView):
    model = Technologie
    template_name = 'frontend/index.html'

class OperationDetailView(DetailView):
    model = Operation
    template_name = 'frontend/index.html'
