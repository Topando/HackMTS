# Generated by Django 5.1.3 on 2024-11-29 17:31

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('departments', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('surname', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('photo', models.ImageField(blank=True, null=True, upload_to='profiles/')),
                ('phone', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
                ('city', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=50)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='departments.department')),
                ('role', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='departments.role')),
            ],
        ),
    ]
