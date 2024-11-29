from django.shortcuts import render

from rest_framework import viewsets
from profiles.models import *
from profiles.serializers import ProfileSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = ProfileSerializer

