from django.db import models

class Candidato(models.Model):
    nome = models.CharField(max_length=50)
    cargo = models.CharField(max_length=50)
    numero = models.IntegerField(max_length=5)
    partido = models.CharField(max_length=50)
    cidade = models.CharField(max_length=50)
    estado = models.CharField(max_length=2)
    endpoint = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.nome}-{self.cargo}-{self.partido}-{self.cidade}-{self.estado}"