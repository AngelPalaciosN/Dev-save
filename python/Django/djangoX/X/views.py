from django.shortcuts import render
from django.shortcuts import render, redirect
from .models import Usuarios

def index(request):
    return render(request, 'X/index.html')


def formulario(request):
    return render(request, 'X/formulario.html')


def lista(request):
    usuarios = Usuarios.objects.all()
    return render(request, 'X/Lista.html', {'usuarios': usuarios})

def formulario(request):
    if request.method == 'POST':
        nombre = request.POST['nombre']
        correo = request.POST['correo']
        Usuarios.objects.create(nombre=nombre, correo=correo)
        return redirect('lista')
    return render(request, 'X/formulario.html')

def editar_usuario(request, id):
    usuario = Usuarios.objects.get(id=id)
    if request.method == 'POST':
        usuario.nombre = request.POST['nombre']
        usuario.correo = request.POST['correo']
        usuario.save()
        return redirect('lista')
    return render(request, 'X/modules/editar_usuario.html', {'usuario': usuario})

def eliminar_usuario(request, id):
    usuario = Usuarios.objects.get(id=id)
    usuario.delete()
    return redirect('lista')
