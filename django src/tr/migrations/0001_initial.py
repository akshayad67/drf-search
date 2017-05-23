# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='search',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('fname', models.CharField(max_length=300)),
                ('lname', models.CharField(max_length=300, null=True)),
                ('Age', models.CharField(max_length=300, null=True)),
                ('uname', models.CharField(max_length=20, null=True)),
                ('pwd', models.CharField(max_length=20, null=True)),
            ],
        ),
    ]
