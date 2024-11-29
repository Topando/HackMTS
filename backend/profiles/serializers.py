from rest_framework import serializers

from profiles.models import Employee


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'