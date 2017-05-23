# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tr', '0002_sv'),
    ]

    operations = [
        migrations.AlterField(
            model_name='search',
            name='pwd',
            field=models.TextField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='sv',
            name='password',
            field=models.TextField(max_length=300, null=True),
        ),
    ]
