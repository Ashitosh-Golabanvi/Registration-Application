from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from app.serializers import RegisterSerializer
from app.models import Register

@csrf_exempt
def registerApi(request,id=0):
    if request.method=='GET':
        registers = Register.objects.all()
        register_serializer=RegisterSerializer(registers,many=True)
        return JsonResponse(register_serializer.data,safe=False)
    elif request.method=='POST':
        register_data=JSONParser().parse(request)
        register_serializer=RegisterSerializer(data=register_data)
        if register_serializer.is_valid():
            register_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        register_data=JSONParser().parse(request)
        register=Register.objects.get(id=id)
        register_serializer=RegisterSerializer(register,data=register_data)
        if register_serializer.is_valid():
            register_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        register=Register.objects.get(id=id)
        register.delete()
        return JsonResponse("Deleted Successfully",safe=False)