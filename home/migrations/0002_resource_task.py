# Generated by Django 2.2.26 on 2022-08-11 20:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Resource',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
                ('description', models.TextField()),
                ('rate', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
                ('description', models.TextField()),
                ('hours', models.IntegerField(blank=True, null=True)),
                ('resource', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='task_resource', to='home.Resource')),
            ],
        ),
    ]
