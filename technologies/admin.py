from django.contrib import admin
from .models import Technologie
from .models import Operation
from .models import Variable
from .models import Unit
from .models import PowerUnit
from .models import Machine
from .models import Agregat
from .models import MachineBlock
from .models import OperationType

class TechnologiesAdmin(admin.ModelAdmin):
  list_display = ('title','description','created_at')
class OperationsAdmin(admin.ModelAdmin):
  list_display = ('title','technologie','description','created_at', 'activated','completed')
class UnitsAdmin(admin.ModelAdmin):
    list_display=('title','value','created_at')
class VariablesAdmin(admin.ModelAdmin):
    list_display=('unit','title','description','value', 'activated','created_at')
class PowerUnitAdmin(admin.ModelAdmin):
    list_display_list = ('title')
class MachineAdmin(admin.ModelAdmin):
    list_display_list=('title')
class AgregatAdmin(admin.ModelAdmin):
    list_display_list=['title','powerunit', 'get_machines']
class MachineBlockAdmin(admin.ModelAdmin):
    list_display_list=('title','quantity','get_machineblocks')
class OperationTypeAdmin(admin.ModelAdmin):
    list_display_list = ('title')


admin.site.register(Technologie,TechnologiesAdmin)
admin.site.register(Operation,OperationsAdmin)
admin.site.register(Unit,UnitsAdmin)
admin.site.register(Variable, VariablesAdmin)
admin.site.register(PowerUnit, PowerUnitAdmin)
admin.site.register(Machine, MachineAdmin)
admin.site.register(Agregat,AgregatAdmin)
admin.site.register(MachineBlock, MachineBlockAdmin)
admin.site.register(OperationType, OperationTypeAdmin)



