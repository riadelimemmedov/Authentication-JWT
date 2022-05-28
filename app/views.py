from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .serializers import *
from .models import *
# Create your views here.

#!PostsView
class PostsView(generics.RetrieveAPIView):#lists posts
    queryset = Posts.objects.all()
    permission_classes = [IsAuthenticated]
    
    def get(self,request,*args, **kwargs):
        queryset_post = self.get_queryset()#butun postlari getir
        print('Queyset Singleden Gelen Datalar ', queryset_post)
        serializer = PostSerializers(queryset_post,many=True)
        return Response(serializer.data) 


