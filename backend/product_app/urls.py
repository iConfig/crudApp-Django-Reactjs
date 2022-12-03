from django.urls import path,include
from django.conf.urls.static import static 
from django.conf import settings

from .views import ProductListView,ProductDetailView

app_name = 'products'

urlpatterns = [
    # path('', ),
    path('api/', ProductListView.as_view(), name="product_list"),
    path('api/<int:pk>/', ProductDetailView.as_view(), name="product_detail"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)