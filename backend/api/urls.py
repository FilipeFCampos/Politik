from rest_framework.routers import DefaultRouter
from .views import CandidatoViewSet

router = DefaultRouter()
router.register(r'feed', CandidatoViewSet)

urlpatterns = router.urls

from django.urls import path
from .views import submit_form

urlpatterns = [
    path('api/submit-form/', submit_form, name='submit_form'),
]
