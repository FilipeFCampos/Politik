from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Candidato
from .serializers import CandidatoSerializer

# Create your views here.
class CandidatoViewSet(ModelViewSet):
    queryset = Candidato.objects.all()
    serializer_class = CandidatoSerializer