from rest_framework.routers import DefaultRouter

from departments.views import DepartmentViewSet, RoleViewSet
from profiles.views import *
from task_manager.views import TaskViewSet

router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='tasks')
urlpatterns = router.urls

print(router.urls)