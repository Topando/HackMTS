from rest_framework.permissions import BasePermission

from departments.models import Department
from .models import Employee, Project

class IsProjectAdmin(BasePermission):
    def has_permission(self, request, view):
        if view.action in ['create', 'update', 'partial_update']:
            department_id = request.data.get('department') or request.POST.get('department')
            if not department_id:
                return True
            try:
                department = Department.objects.get(pk=department_id).project.author
                return department == request.user
            except Exception:
                return False  # Если пользователь не связан с проектом

        return True  # Для остальных действий доступ разрешён
