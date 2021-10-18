# todo/serializers.py

from rest_framework import serializers
from technologies.models import Operation
from technologies.models import Technologie
from technologies.models import Variable
from technologies.models import Unit
from technologies.models import PowerUnit
from technologies.models import Machine
from technologies.models import Agregat
from technologies.models import MachineBlock
from technologies.models import OperationType

from photologue.models import Gallery
from photologue.models import Photo

class PreviewImageSerializerMixin(serializers.ModelSerializer):
    preview_image_small = serializers.SerializerMethodField()
    preview_image_medium = serializers.SerializerMethodField()
    preview_image_large = serializers.SerializerMethodField()
    preview_image_raw = serializers.SerializerMethodField()

    def get_preview_image_small(self, obj):
       request = self.context['request']
       if request and hasattr(obj, 'preview_image'):
           image = getattr(obj, 'preview_image')
           if image is not None:
               url = image.get_small_url()
               return request.build_absolute_uri(url)
       return None

    def get_preview_image_medium(self, obj):
       request = self.context['request']
       if request and hasattr(obj, 'preview_image'):
           image = getattr(obj, 'preview_image')
           if image is not None:
               url = image.get_medium_url()
               return request.build_absolute_uri(url)
       return None

    def get_preview_image_large(self, obj):
       request = self.context['request']
       if request and hasattr(obj, 'preview_image'):
           image = getattr(obj, 'preview_image')
           if image is not None:
               url = image.get_large_url()
               return request.build_absolute_uri(url)
       return None

    def get_preview_image_raw(self, obj):
       request = self.context['request']
       if request and hasattr(obj, 'preview_image'):
           image = getattr(obj, 'preview_image')
           if image is not None:
               url = image.get_raw_url()
               return request.build_absolute_uri(url)
       return None



class OperationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Operation
    fields = ('id', 'title', 'operationtype','technologie','description', 'agregats','created_at','activated', 'completed')

class TechnologieSerializer(serializers.ModelSerializer):
  class Meta:
    model = Technologie
    fields = ('id', 'title', 'description', 'created_at')

class UnitSerializer(serializers.ModelSerializer):
  class Meta:
    model = Unit
    fields = ('id', 'title', 'created_at','value')

class VariableSerializer(serializers.ModelSerializer):
  class Meta:
    model = Variable
    fields = ('id', 'title', 'unit','description', 'created_at','value', 'activated')

class GallerySerializer(serializers.ModelSerializer):
  class Meta:
    model = Gallery
    fields = ('id','title', 'slug', 'description','photos','sites')

class PhotoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Photo
    fields = ('id','title','slug', 'caption','image','admin_thumbnail','cache_url','image_filename')

class PowerUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = PowerUnit
        fields = ('id', 'title','price','weight','years','image')

class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Machine
        fields = ('id', 'title','price','weight','years','image')

class AgregatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agregat
        fields = ('id', 'title','powerunit','machine','machineblock')

class MachineBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = MachineBlock
        fields = ('id' , 'title', 'machine','quantity')

class OperationTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = OperationType
        fields = ('id', 'title')

class MachinePreviewSerializer(PreviewImageSerializerMixin):
    """
    Serializer for Machine instance
    """
    class Meta:
        model = Machine
        fields = ('id', 'title', 'image',
                  'preview_image_small', 'preview_image_medium',
                  'preview_image_large', 'preview_image_raw')

