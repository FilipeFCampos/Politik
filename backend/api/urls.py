from rest_framework.routers import DefaultRouter
from .views import CandidatoViewSet, submit_form
from django.urls import path

router = DefaultRouter()
router.register(r'feed', CandidatoViewSet)

urlpatterns = router.urls + [
    path('submit-form/', submit_form, name='submit_form'),
]
