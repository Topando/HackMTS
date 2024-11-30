from rest_framework import serializers

from profiles.models import Employee


class ProfileSerializer(serializers.ModelSerializer):
    role_id_name = serializers.SerializerMethodField()
    department_id_name = serializers.SerializerMethodField()

    class Meta:
        model = Employee
        fields = '__all__'

    def get_role_id_name(self, obj):
        if obj.role_id:
            return {
                'id': obj.role.id,
                'name': obj.role.name,
        }

    def get_department_id_name(self, obj):
        if obj.department_id:
            return {
                'id': obj.department.id,
                'name': obj.department.name,
            }
