from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from app import views

urlpatterns = [
    url(r'^register$',views.registerApi),
    url(r'^register$',views.registerApi),
    url(r'^register/([0-9]+)$',views.registerApi),
    path('admin/', admin.site.urls),
]