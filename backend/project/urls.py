from rest_framework.routers import DefaultRouter

from departments.views import DepartmentViewSet, RoleViewSet
from profiles.views import *
from project.views import ProjectViewSet

router = DefaultRouter()
router.register(r'', ProjectViewSet, basename='project')
urlpatterns = router.urls

print(router.urls)