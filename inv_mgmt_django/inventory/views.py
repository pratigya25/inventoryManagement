from django.shortcuts import render
from rest_framework import viewsets
from .models import Product, Sale
from .serializers import ProductSerializer, SaleSerializer

# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class SaleViewSet(viewsets.ModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer