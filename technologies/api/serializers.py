
# todo/serializers.py

from rest_framework import serializers
from technologies.models import Operation
from technologies.models import Technologie
from technologies.models import Variable
from technologies.models import Unit

from photologue.models import Gallery
from photologue.models import Photo

class OperationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Operation
    fields = ('id', 'title', 'technologie','description', 'created_at','activated', 'completed')

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


