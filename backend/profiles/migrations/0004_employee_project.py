# Generated by Django 5.1.3 on 2024-11-30 04:40

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0003_employee_user'),
        ('project', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='project',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='project.project'),
        ),
    ]
