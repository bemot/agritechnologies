# todo/admin.py
from django.contrib import admin
from .models import Technologie # add this
from .models import Operation
class TechnologiesAdmin(admin.ModelAdmin):  # add this
  list_display = ('id','title','description','created_at') # add this
class OperationsAdmin(admin.ModelAdmin):
  list_display = ('id','title','technologie_id','description','created_at', 'activated','completed')
# Register your models here.
admin.site.register(Technologie, TechnologiesAdmin) # add this
admin.site.register(Operation, OperationsAdmin)
