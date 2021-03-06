
# todo/serializers.py

from rest_framework import serializers
from technologies.models import Operation
from technologies.models import Technologie
from photologue.models import Gallery
from photologue.models import Photo

class OperationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Operation
    fields = ('id', 'title', 'technologie_id','description', 'created_at','activated', 'completed')

class TechnologieSerializer(serializers.ModelSerializer):
  class Meta:
    model = Technologie
    fields = ('id', 'title', 'description', 'created_at')

class GallerySerializer(serializers.ModelSerializer):
  class Meta:
    model = Gallery
    fields = ('title', 'slug', 'description','photos','sites')

class PhotoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Photo
    fields = ('title','slug', 'caption','image','admin_thumbnail','cache_url','image_filename')


