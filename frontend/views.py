from django.shortcuts import render
from django.views.generic.detail import DetailView

from technologies.models import Technologie


def index(request):
    return render(request, 'frontend/index.html')


class TechnologieDetailView(DetailView):
    model = Technologie
    template_name = 'frontend/index.html'
