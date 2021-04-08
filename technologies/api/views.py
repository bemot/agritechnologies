from rest_framework import viewsets

from .serializers import TechnologieSerializer
from .serializers import OperationSerializer

from technologies.models import Technologie
from technologies.models import Operation

class TechnologieViewSet(viewsets.ModelViewSet):
    queryset = Technologie.objects.all()
    serializer_class = TechnologieSerializer

class OperationViewSet(viewsets.ModelViewSet):
    queryset = Operation.objects.all()
    serializer_class = OperationSerializer
