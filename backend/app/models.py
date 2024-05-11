from django.db import models

class Register(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    dob = models.DateField()

