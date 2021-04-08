# todo/admin.py
from django.contrib import admin
from .models import Technologie # add this
from .models import Operation
class TechnologiesAdmin(admin.ModelAdmin):  # add this
  list_display = ('title','description','created_at') # add this
class OperationsAdmin(admin.ModelAdmin):
  list_display = ('title','technologie_id','description','created_at', 'completed')
# Register your models here.
admin.site.register(Technologie, TechnologiesAdmin) # add this
admin.site.register(Operation, OperationsAdmin)
