from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action

from task_manager.models import Task
from task_manager.serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
