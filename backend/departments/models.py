from django.db import models

class Department(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    parent_department = models.ForeignKey('self', on_delete=models.SET_NULL, null=True)


class Role(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.name

