# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-12-01 09:48
from __future__ import unicode_literals

from django.conf import settings
import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ActivityLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('object_id2', models.PositiveIntegerField(blank=True, null=True)),
                ('level', models.CharField(choices=[('I', 'INFO'), ('E', 'ERROR'), ('C', 'CRITICAL'), ('D', 'DEBUG'), ('W', 'WARNING')], max_length=1)),
                ('category', models.CharField(max_length=20)),
                ('meta_info', django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('content_type2', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='entity', to='contenttypes.ContentType')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
