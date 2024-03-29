# Generated by Django 3.1.7 on 2021-10-23 18:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('photologue', '0011_auto_20190223_2138'),
    ]

    operations = [
        migrations.CreateModel(
            name='Agregat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Machine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=15)),
                ('weight', models.IntegerField(blank=True, null=True)),
                ('years', models.IntegerField(blank=True, null=True)),
                ('image', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='photologue.photo')),
            ],
        ),
        migrations.CreateModel(
            name='OperationType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Technologie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Unit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('value', models.CharField(max_length=15)),
            ],
        ),
        migrations.CreateModel(
            name='Variable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('description', models.TextField()),
                ('value', models.FloatField(default=0.0)),
                ('activated', models.BooleanField(default=False)),
                ('unit', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='technologies.unit')),
            ],
        ),
        migrations.CreateModel(
            name='TechnologieList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('date', models.DateField(blank=True, null=True)),
                ('activated', models.BooleanField(blank=True, default=False)),
                ('completed', models.BooleanField(blank=True, default=False)),
                ('agregats', models.ManyToManyField(blank=True, to='technologies.Agregat')),
                ('technologie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='technologies.technologie')),
            ],
        ),
        migrations.CreateModel(
            name='PowerUnit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=15, null=True)),
                ('weight', models.IntegerField(blank=True, null=True)),
                ('years', models.IntegerField(blank=True, null=True)),
                ('image', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='photologue.photo')),
            ],
        ),
        migrations.CreateModel(
            name='Operation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('description', models.TextField()),
                ('activated', models.BooleanField(default=False)),
                ('completed', models.BooleanField(default=False)),
                ('agregats', models.ManyToManyField(blank=True, to='technologies.Agregat')),
                ('operationtype', models.ManyToManyField(blank=True, to='technologies.OperationType')),
                ('technologie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='technologies.technologie')),
            ],
        ),
        migrations.CreateModel(
            name='MachineBlock',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('quantity', models.IntegerField(blank=True, null=True)),
                ('machine', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='technologies.machine')),
                ('operationtype', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='technologies.operationtype')),
            ],
        ),
        migrations.AddField(
            model_name='machine',
            name='operationtype',
            field=models.ManyToManyField(blank=True, to='technologies.OperationType'),
        ),
        migrations.AddField(
            model_name='agregat',
            name='machine',
            field=models.ManyToManyField(blank=True, to='technologies.Machine'),
        ),
        migrations.AddField(
            model_name='agregat',
            name='machineblock',
            field=models.ManyToManyField(blank=True, to='technologies.MachineBlock'),
        ),
        migrations.AddField(
            model_name='agregat',
            name='operationtype',
            field=models.ManyToManyField(blank=True, to='technologies.OperationType'),
        ),
        migrations.AddField(
            model_name='agregat',
            name='powerunit',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='technologies.powerunit'),
        ),
    ]
