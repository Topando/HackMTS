from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter

from authentication.views import *

router = DefaultRouter()
urlpatterns = [
    path('register/', RegisterView.as_view(), name='user-create'),
    path('login/', obtain_auth_token, name='user-login'),
]

print(router.urls)