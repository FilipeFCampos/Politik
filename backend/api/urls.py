from rest_framework.routers import DefaultRouter
from .views import CandidatoViewSet

router = DefaultRouter()
router.register(r'feed', CandidatoViewSet)

urlpatterns = router.urls