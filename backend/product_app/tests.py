from django.test import TestCase
from .models import Product
from django.urls import reverse 
from rest_framework import status 
from django.contrib.auth.models import User 
from rest_framework.test import APITestCase


# Testing app 
class Test_app(TestCase):

    def create_user(self):
        test_user = User.objects.create_user(username='test10', password="Y3S0hTest")

        test_product = Product.objects.create(
                        image = "abc.jpg",
                        name = 'test name',
                        price = 23.90,
                        description = 'this is a test product',
                        category = 'test category'
        )
        test_product.save()
        self.assertEqual(response.status_code,200)
