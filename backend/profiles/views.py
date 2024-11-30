from django.db.models import Min
from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from profiles.models import *
from profiles.permissions import IsProjectAdmin
from profiles.serializers import ProfileSerializer
from django.db.models import Q

from task_manager.models import Task
from task_manager.serializers import TaskSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = ProfileSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update']:
            return [IsAuthenticated(), IsProjectAdmin()]
        return [IsAuthenticated()]


    @action(detail=True, methods=['get'], url_path='director-by-employee')
    def get_director_by_employee(self, request, pk=None):
        employee = self.get_object()
        department = employee.department
        directors = Employee.objects.filter(department=department)
        min_order = directors.aggregate(Min('role__order'))['role__order__min']
        director_with_min_order = directors.filter(role__order=min_order)

        serializer = ProfileSerializer(director_with_min_order, many=True)
        return Response(serializer.data)


    @action(detail=False, methods=['get'], url_path='employee-by-sings')
    def get_employee_by_sings(self, request):
        sings = request.query_params.get('sings')
        project_id = request.query_params.get('project_id')

        sings = sings.split(';') if sings else []
        query = Q()
        try:
            project = Project.objects.get(id=project_id)
        except Project.DoesNotExist:
            return Response({"detail": "Проект с указанным project_id не найден."}, status=404)

        for term in sings:
            term_query = Q()
            term_query |= Q(name__icontains=term)
            term_query |= Q(surname__icontains=term)
            term_query |= Q(description__icontains=term)
            term_query |= Q(phone__icontains=term)
            term_query |= Q(email__icontains=term)
            term_query |= Q(city__icontains=term)
            term_query |= Q(address__icontains=term)
            term_query |= Q(department__name__icontains=term)
            term_query |= Q(role__name__icontains=term)
            query &= term_query
        query &= Q(project_id=project.id)

        employees = Employee.objects.filter(query)

        serializer = ProfileSerializer(employees, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path='get-tasks-by-executor-id')
    def get_tasks_by_executor_id(self, request, pk=None):
        employee = self.get_object()
        tasks = Task.objects.filter(executor=employee)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)