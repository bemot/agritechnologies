from rest_framework import routers
from django.urls import path, re_path, include



from .views import TechnologieViewSet, UnitViewSet
from .views import OperationViewSet
from .views import VariableViewSet
from .views import UnitViewSet
from .views import PowerUnitViewSet
from .views import MachineViewSet
from .views import AgregatViewSet
from .views import MachineBlockViewSet 
from .views import OperationTypeViewSet
from .views import MachinePreviewSet



from .views import GalleryViewSet
from .views import PhotoViewSet

router = routers.DefaultRouter()

router.register('technologies', TechnologieViewSet, 'technologies')
router.register('operations', OperationViewSet, 'operations')
router.register('variables', VariableViewSet, 'variables')
router.register('units', UnitViewSet, 'units')
router.register('power-unit', PowerUnitViewSet,'power-units')
router.register('machines', MachineViewSet, 'machines')
router.register('agregates', AgregatViewSet, 'agregates')
router.register('machineblocks', MachineBlockViewSet,'machineblocks')
router.register('operationtypes', OperationTypeViewSet, 'operationtypes')
router.register('machinepreviews', MachinePreviewSet, 'machinepreviews')

router.register('gallery', GalleryViewSet,'gallery')
router.register('photo', PhotoViewSet,'photo')

urlpatterns = router.urls




