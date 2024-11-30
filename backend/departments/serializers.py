from rest_framework import serializers

from departments.models import Department, Role


class DepartmentSerializer(serializers.ModelSerializer):
    department_id_name = serializers.SerializerMethodField()

    class Meta:
        model = Department
        fields = '__all__'

    def get_department_id_name(self, obj):
        if obj.parent_department:
            return {
                'id': obj.parent_department.id,
                'name': obj.parent_department.name
            }


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'
