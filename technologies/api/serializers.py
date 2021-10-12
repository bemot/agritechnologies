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
    fields = ('title', 'slug', 'description','photos','sites')

class PhotoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Photo
    fields = ('title','slug', 'caption','image','admin_thumbnail','cache_url','image_filename')

class PowerUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = PowerUnit
        fields = ('id', 'title')

class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Machine
        fields = ('id', 'title')

class AgregatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agregat
        fields = ('id', 'title','powerunit','machine','machineblock')

class MachineBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = MachineBlock
        fields = ('id' , 'title', 'quantity')

class OperationTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = OperationType
        fields = ('id', 'title')

