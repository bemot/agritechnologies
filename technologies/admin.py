# todo/admin.py
from django.contrib import admin
from .models import Technologie # add this
from .models import Operation
from .models import Variable
from .models import Unit
class TechnologiesAdmin(admin.ModelAdmin):  # add this
  list_display = ('id','title','description','created_at') # add this
class OperationsAdmin(admin.ModelAdmin):
  list_display = ('id','title','technologie_id','description','created_at', 'activated','completed')
class VariablesAdmin(admin.ModelAdmin):
    list_display=('id','title','description','value', 'od_vymiru','activated','created_at')
class UnitsAdmin(admin.ModelAdmin):
    list_display=('id','title','value','created_at')


# Register your models here.
admin.site.register(Technologie, TechnologiesAdmin) # add this
admin.site.register(Operation, OperationsAdmin)
admin.site.register(Variable, VariablesAdmin)
admin.site.register(Unit, UnitsAdmin)
