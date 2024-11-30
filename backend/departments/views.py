from django.shortcuts import render

from rest_framework import viewsets, permissions, serializers
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from yaml import serialize

from departments.models import Department, Role
from departments.permissions import IsProjectAuthor, IsEmployeeOrProjectAuthor
from departments.serializers import DepartmentSerializer, RoleSerializer
from profiles.models import Employee
from profiles.serializers import ProfileSerializer
from project.models import Project


class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

    def get_permissions(self):
        if self.action == 'create':
            return [IsAuthenticated(), IsProjectAuthor()]

        if self.action in ['list', 'retrieve', 'get_department_by_patent', 'get_employees_by_department']:
            return [IsAuthenticated(), IsEmployeeOrProjectAuthor()]

        return [IsAuthenticated()]

    def get_queryset(self):
        project_pk = self.request.query_params.get('project_pk')

        if not project_pk:
            raise serializers.ValidationError({"project_pk": "Параметр project_pk обязателен."})

        try:
            project = Project.objects.get(pk=project_pk)
        except Project.DoesNotExist:
            raise serializers.ValidationError({"project_pk": "Проект с указанным project_pk не существует."})

        return Department.objects.filter(project=project)

    def perform_create(self, serializer):
        project_pk = self.request.data.get('project_pk')

        if not project_pk:
            raise serializers.ValidationError({"project_pk": "Параметр project_pk обязателен."})

        try:
            project = Project.objects.get(pk=project_pk)
        except Project.DoesNotExist:
            raise serializers.ValidationError({"project_pk": "Проект с указанным project_pk не существует."})

        # Сохраняем объект
        serializer.save(project=project)

    @action(detail=True, methods=['GET'], url_path='departments-by-parent')
    def get_department_by_patent(self, request, pk=None):
        print(f"Полученный pk: {pk}")  # Вывод pk
        parent_department = self.get_object()
        print(f"Родительский департамент: {parent_department}")  # Вывод родительского департамента

        all_departments = parent_department.get_descendants()
        serializer = DepartmentSerializer(all_departments, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['GET'], url_path='employees-by-department')
    def get_employees_by_department(self, request, pk=None):
        department = self.get_object()
        employees = Employee.objects.filter(department=department)
        serializer = ProfileSerializer(employees, many=True)
        return Response(serializer.data)


class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
