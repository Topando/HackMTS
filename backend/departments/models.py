from django.db import models
from project.models import *

class Department(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    parent_department = models.ForeignKey('self', on_delete=models.SET_NULL, null=True)
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True)

    def get_descendants(self):
        descendants = []
        children = Department.objects.filter(parent_department=self)
        for child in children:
            descendants.append(child)
            descendants.extend(child.get_descendants())
        return descendants

class Role(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    order = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return self.name

