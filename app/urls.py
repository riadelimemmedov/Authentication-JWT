from django.urls import path
from .views import *

app_name = 'appUrls'

urlpatterns = [
    path('posts/',PostsView.as_view(),name='PostsView')
]
