from django.db import models
from profiles.models import *
class Task(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    executor = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name