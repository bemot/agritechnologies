from rest_framework import routers
from django.urls import path, re_path, include



from .views import TechnologieViewSet
from .views import OperationViewSet
from .views import GalleryViewSet
from .views import PhotoViewSet

router = routers.DefaultRouter()

router.register('technologies', TechnologieViewSet, 'technologies')
router.register('operations', OperationViewSet, 'operations')
router.register('gallery', GalleryViewSet,'gallery')
router.register('photo', PhotoViewSet,'photo')

urlpatterns = router.urls




