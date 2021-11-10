from rest_framework import viewsets

from .serializers import TechnologieSerializer
from .serializers import OperationSerializer
from .serializers import TechnologieListSerializer
from .serializers import GallerySerializer
from .serializers import PhotoSerializer
from .serializers import VariableSerializer
from .serializers import UnitSerializer
from .serializers import PowerUnitSerializer
from .serializers import MachineSerializer
from .serializers import AgregatSerializer
from .serializers import MachineBlockSerializer
from .serializers import OperationTypeSerializer
from .serializers import MachinePreviewSerializer
from .serializers import PreviewImageSerializerMixin


from technologies.models import Technologie
from technologies.models import Operation
from technologies.models import Variable
from technologies.models import Unit
from technologies.models import PowerUnit
from technologies.models import Machine
from technologies.models import Agregat
from technologies.models import MachineBlock
from technologies.models import OperationType
from technologies.models import TechnologieList

from photologue.models import Gallery, Photo

class TechnologieViewSet(viewsets.ModelViewSet):
    queryset = Technologie.objects.all()
    serializer_class = TechnologieSerializer

class TechnologieListViewSet(viewsets.ModelViewSet):
    queryset = TechnologieList.objects.all()
    serializer_class = TechnologieListSerializer


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

class MachinePreviewSet(viewsets.ModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = MachinePreviewSerializer

class AgregatViewSet(viewsets.ModelViewSet):
    queryset = Agregat.objects.all()
    serializer_class = AgregatSerializer

class MachineBlockViewSet(viewsets.ModelViewSet):
    queryset = MachineBlock.objects.all()
    serializer_class = MachineBlockSerializer

class OperationTypeViewSet(viewsets.ModelViewSet):
    queryset = OperationType.objects.all()
    serializer_class = OperationTypeSerializer





