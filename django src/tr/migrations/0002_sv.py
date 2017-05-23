# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tr', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='sv',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('username', models.CharField(max_length=300)),
                ('password', models.CharField(max_length=300, null=True)),
            ],
        ),
    ]
