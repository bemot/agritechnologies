
# todo/serializers.py

from rest_framework import serializers
from technologies.models import Operation
from technologies.models import Technologie
      
class OperationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Operation
    fields = ('id', 'title', 'technologie_id','description', 'created_at','completed')

class TechnologieSerializer(serializers.ModelSerializer):
  class Meta:
    model = Technologie
    fields = ('id', 'title', 'description', 'created_at')

   
