from rest_framework import viewsets

from .serializers import TechnologieSerializer
from .serializers import OperationSerializer
from .serializers import GallerySerializer
from .serializers import PhotoSerializer

from technologies.models import Technologie
from technologies.models import Operation
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


