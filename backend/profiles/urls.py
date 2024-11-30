from rest_framework.routers import DefaultRouter

from profiles.views import *

router = DefaultRouter()
router.register(r'', ProfileViewSet, basename='profiles')
urlpatterns = router.urls

print(router.urls)