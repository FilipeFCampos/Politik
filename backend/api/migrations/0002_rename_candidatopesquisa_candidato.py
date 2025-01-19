from django.db import migrations

class Migration(migrations.Migration):
    
    dependencies = [
        ('api', '0001_initial'),
    ]
    
    operations = [
        migrations.RenameModel(
            old_name='CandidatoPesquisa',
            new_name='Candidato',
        ),
    ]