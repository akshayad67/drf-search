from django.db import models

# Create your models here.

class search(models.Model):
	fname = models.CharField(max_length=300)
	lname = models.CharField(null=True,max_length=300)
	Age = models.CharField(null=True,max_length=300)
	uname = models.CharField(null=True,max_length=20)
	pwd = models.TextField(null=True,max_length=20)


		