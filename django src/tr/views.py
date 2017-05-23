from django.shortcuts import render
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
# Create your views here.


@csrf_exempt
def result(request):
	inst = search(fname=request.POST['fname'],
	lname=request.POST['lname'],
	Age=request.POST['Age'],
	uname=request.POST['uname'],
	pwd=request.POST['pwd'],
	)
	inst.save();
	print request.POST
	response= JsonResponse({"status": "1"})

	response['Access-Control-Allow-Origin']='*'
	return response

@csrf_exempt
def login(request):
	u=request.POST['username']
	p=request.POST['password']
	print request.POST
	valid_user = search.objects.filter(uname=u,pwd=p).exists()
	if valid_user:
		et={"status":1}
	else:

		et={"status":0}
	response= JsonResponse(et)

	response['Access-Control-Allow-Origin']='*'
	return response