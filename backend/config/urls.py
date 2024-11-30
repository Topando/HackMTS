from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

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
    path(f'{api_vers}authentication/', include('authentication.urls')),
    path(f'{api_vers}company/', include('project.urls')),
    path('swagger/', schema_view.as_view()),  # Документация Swagger
]
