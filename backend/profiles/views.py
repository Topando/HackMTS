from django.db.models import Min
from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from profiles.models import *
from profiles.serializers import ProfileSerializer
from django.db.models import Q


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = ProfileSerializer


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
        sings = sings.split(';') if sings else []
        query = Q()

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
        employees = Employee.objects.filter(query)
        serializer = ProfileSerializer(employees, many=True)
        return Response(serializer.data)