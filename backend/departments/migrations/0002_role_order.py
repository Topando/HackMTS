# Generated by Django 5.1.3 on 2024-11-29 19:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('departments', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='role',
            name='order',
            field=models.PositiveSmallIntegerField(default=0),
        ),
    ]