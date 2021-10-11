from rest_framework import viewsets

from .serializers import TechnologieSerializer
from .serializers import OperationSerializer
from .serializers import GallerySerializer
from .serializers import PhotoSerializer
from .serializers import VariableSerializer
from .serializers import UnitSerializer
from .serializers import PowerUnitSerializer
from .serializers import MachineSerializer
from .serializers import AgregatSerializer

from technologies.models import Technologie
from technologies.models import Operation
from technologies.models import Variable
from technologies.models import Unit
from technologies.models import PowerUnit
from technologies.models import Machine
from technologies.models import Agregat


from photologue.models import Gallery, Photo

class TechnologieViewSet(viewsets.ModelViewSet):
    queryset = Technologie.objects.all()
    serializer_class = TechnologieSerializer

class OperationViewSet(viewsets.ModelViewSet):
    queryset = Operation.objects.all()
    serializer_class = OperationSerializer

class GalleryViewSet(viewsets.ModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer


class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

class VariableViewSet(viewsets.ModelViewSet):
    queryset = Variable.objects.all()
    serializer_class = VariableSerializer

class UnitViewSet(viewsets.ModelViewSet):
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer

class PowerUnitViewSet(viewsets.ModelViewSet):
    queryset = PowerUnit.objects.all()
    serializer_class = PowerUnitSerializer

class MachineViewSet(viewsets.ModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer

class AgregatViewSet(viewsets.ModelViewSet):
    queryset = Agregat.objects.all()
    serializer_class = AgregatSerializer



