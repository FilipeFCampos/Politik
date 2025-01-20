from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from .models import Candidato
from .serializers import CandidatoSerializer

class CandidatoViewSet(ModelViewSet):
    queryset = Candidato.objects.all()
    serializer_class = CandidatoSerializer

    filter_backends = [SearchFilter]
    search_fields = ['nome', 'partido', 'cidade', 'estado', 'numero']
    
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core.files.storage import default_storage
from .models import FormSubmission
from .utils import send_attachments
from django.conf import settings
import json

def send_email(attachments):
    subject = "Aplicação de candidato Politik"
    message = "Teste"
    recipient_list = ["filipe.campos.127@ufrn.edu.br"]
    json_path = f"{settings.BASE_DIR}/form_data.json"
    
    send_attachments(subject, message, recipient_list, json_path, attachments)


@csrf_exempt
def submit_form(request):
    if request.method == "POST":
        data = request.POST
        files = request.FILES
        submission = FormSubmission(
            nome=data.get('nome'),
            nascimento=data.get('nascimento'),
            email=data.get('email'),
            cpf=data.get('CPF'),
            endereco=data.get('endereço'),
            cidade=data.get('cidade'),
            bairro=data.get('bairro'),
            cep=data.get('CEP'),
            estado=data.get('estado'),
            partido=data.get('partido'),
            sigla=data.get('sigla'),
            cnpj=data.get('CNPJ'),
            escopo=data.get('escopo'),
            cargo=data.get('cargo'),
            mensagem=data.get('mensagem'),
            foto_identidade=files.get('foto-identidade'),
            comprovante_residencia=files.get('foto-comprovante-residencia'),
            documento_aplicacao=files.get('documento-aplicacao'),
        )
        submission.save()
        data = request.POST.dict()
        files = request.FILES.dict()
        all_data = {**data, **{key: str(value) for key, value in files.items()}}
        with open('form_data.json', 'w') as json_file:
            json.dump(all_data, json_file, indent=2)
        
        send_email(files)
        return JsonResponse({"message": "Form submitted and saved as JSON!"}, status=201)

    return JsonResponse({"error": "Invalid request method"}, status=400)