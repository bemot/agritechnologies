from django.contrib import admin
from .models import Technologie
from .models import Operation
from .models import Variable
from .models import Unit
class TechnologiesAdmin(admin.ModelAdmin):
  list_display = ('title','description','created_at')
class OperationsAdmin(admin.ModelAdmin):
  list_display = ('title','technologie','description','created_at', 'activated','completed')
class UnitsAdmin(admin.ModelAdmin):
    list_display=('title','value','created_at')
class VariablesAdmin(admin.ModelAdmin):
    list_display=('unit','title','description','value', 'activated','created_at')

admin.site.register(Technologie,TechnologiesAdmin)
admin.site.register(Operation,OperationsAdmin)
admin.site.register(Unit,UnitsAdmin)
admin.site.register(Variable, VariablesAdmin)




