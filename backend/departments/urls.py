from rest_framework.routers import DefaultRouter

from departments.views import DepartmentViewSet, RoleViewSet
from profiles.views import *

router = DefaultRouter()
router.register(r'department', DepartmentViewSet, basename='departments')
router.register(r'role', RoleViewSet, basename='roles')
urlpatterns = router.urls

print(router.urls)