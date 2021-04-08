from rest_framework import routers

from .views import TechnologieViewSet
from .views import OperationViewSet

router = routers.DefaultRouter()
router.register('technologies', TechnologieViewSet, 'technologies')
router.register('operations', OperationViewSet, 'operations')


urlpatterns = router.urls
