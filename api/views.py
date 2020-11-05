from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from . serializer import MovieSerializer
from . models import *
# Create your views here.

class MovieViewSet(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
