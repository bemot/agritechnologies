# Generated by Django 3.1.7 on 2021-10-11 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('technologies', '0005_machineblock_quantity'),
    ]

    operations = [
        migrations.AddField(
            model_name='agregat',
            name='machineblock',
            field=models.ManyToManyField(to='technologies.MachineBlock'),
        ),
    ]
