# Generated by Django 5.1.5 on 2025-01-19 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_candidatopesquisa_candidato'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidato',
            name='numero',
            field=models.IntegerField(default=0, max_length=5),
            preserve_default=False,
        ),
    ]
