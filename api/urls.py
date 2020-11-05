from django.urls import path
from rest_framework import routers
from . views import MovieViewSet

router = routers.DefaultRouter()
router.register('movie', MovieViewSet)

urlpatterns = router.urls