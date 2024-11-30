from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from config import settings

schema_view = get_schema_view(
    openapi.Info(
        title="API",  # Название вашего API
        default_version='v1',
        description="API Documentation",
        license=openapi.License(name="MIT License"),
    ),
    public=True,
)
api_vers = "api/v1/"
urlpatterns = [
    path('admin/', admin.site.urls),
    path(f'{api_vers}profiles/', include('profiles.urls')),
    path(f'{api_vers}project/', include('departments.urls')),
    path(f'{api_vers}task-manager/', include('task_manager.urls')),
    path('swagger/', schema_view.as_view()),  # Документация Swagger
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
