from rest_framework.routers import DefaultRouter

from departments.views import DepartmentViewSet
from profiles.views import *

router = DefaultRouter()
router.register(r'', DepartmentViewSet, basename='departments')
urlpatterns = router.urls

print(router.urls)