from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from yaml import serialize

from departments.models import Department, Role
from departments.serializers import DepartmentSerializer, RoleSerializer
from profiles.models import Employee
from profiles.serializers import ProfileSerializer


class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

    @action(detail=True, methods=['GET'], url_path='departments-by-parent')
    def get_department_by_patent(self, request, pk=None):
        parent_department = self.get_object()
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
