from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

from profiles.models import Employee


@receiver(post_save, sender=User)
def update_employee(sender, instance, created, **kwargs):
    if created:
        print(123123)
        employee = Employee.objects.filter(email=instance.email).first()
        if employee:
            employee.user = instance
            employee.save()
