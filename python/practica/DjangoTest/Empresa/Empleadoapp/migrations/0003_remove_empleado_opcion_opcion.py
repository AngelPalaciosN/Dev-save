# Generated by Django 5.1.6 on 2025-03-13 01:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Empleadoapp', '0002_empleado_opcion'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='empleado',
            name='opcion',
        ),
        migrations.CreateModel(
            name='opcion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('opcion', models.CharField(max_length=200)),
                ('votos', models.IntegerField(default=0)),
                ('empleado', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Empleadoapp.empleado')),
            ],
        ),
    ]
