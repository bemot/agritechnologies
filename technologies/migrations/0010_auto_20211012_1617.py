# Generated by Django 2.2.20 on 2021-10-12 13:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('technologies', '0009_auto_20211012_1615'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agregat',
            name='powerunit',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='technologies.PowerUnit'),
        ),
    ]
