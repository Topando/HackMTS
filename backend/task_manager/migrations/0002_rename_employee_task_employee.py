# Generated by Django 5.1.3 on 2024-11-29 22:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task_manager', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='Employee',
            new_name='employee',
        ),
    ]
