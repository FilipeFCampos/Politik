from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from .models import Candidato
from .serializers import CandidatoSerializer

class CandidatoViewSet(ModelViewSet):
    queryset = Candidato.objects.all()
    serializer_class = CandidatoSerializer

    filter_backends = [SearchFilter]
    search_fields = ['nome', 'partido', 'cidade', 'estado', 'numero']