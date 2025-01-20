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
    
class FormSubmission(models.Model):
    nome = models.CharField(max_length=255)
    nascimento = models.DateField()
    email = models.EmailField()
    cpf = models.CharField(max_length=14)
    endereco = models.CharField(max_length=255)
    cidade = models.CharField(max_length=100)
    bairro = models.CharField(max_length=100)
    cep = models.CharField(max_length=9)
    estado = models.CharField(max_length=2)
    partido = models.CharField(max_length=255)
    sigla = models.CharField(max_length=10)
    cnpj = models.CharField(max_length=18)
    escopo = models.CharField(max_length=50)
    cargo = models.CharField(max_length=50)
    mensagem = models.TextField(blank=True, null=True)
    foto_identidade = models.FileField(upload_to='uploads/')
    comprovante_residencia = models.FileField(upload_to='uploads/')
    documento_aplicacao = models.FileField(upload_to='uploads/')
    created_at = models.DateTimeField(auto_now_add=True)