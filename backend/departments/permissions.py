from rest_framework.permissions import BasePermission

from profiles.models import Employee
from project.models import Project


class IsProjectAuthor(BasePermission):
    """
    Разрешение для проверки, является ли пользователь автором проекта.
    """
    def has_permission(self, request, view):
        # Проверяем, передан ли project_pk
        project_pk = request.data.get('project_pk') or request.query_params.get('project_pk')
        if not project_pk:
            return False  # Если project_pk не передан, доступ запрещен

        # Проверяем, является ли пользователь автором проекта
        project = Project.objects.filter(pk=project_pk, author=request.user).first()
        return project is not None


class IsEmployeeOrProjectAuthor(BasePermission):
    """
    Разрешение для проверки, является ли пользователь сотрудником проекта
    или автором проекта.
    """
    def has_permission(self, request, view):

        project_pk = request.query_params.get('project_pk') or request.data.get('project_pk')
        print(f"Переданный project_pk: {project_pk}")  # Отладка
        # Проверяем, передан ли project_pk
        if not project_pk:
            return False

        try:
            project_pk = int(project_pk)
        except ValueError:
            return False  # Неверный формат project_pk

        # Проверяем, является ли пользователь автором проекта
        project_author = Project.objects.filter(author=request.user, pk=project_pk).exists()
        if project_author:
            return True

        # Проверяем, связан ли пользователь как сотрудник с проектом
        employee = Employee.objects.filter(user=request.user).select_related('department__project').first()
        if employee and employee.department and employee.department.project:
            return employee.department.project.pk == project_pk

        return False