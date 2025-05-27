from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from django.contrib.auth.decorators import login_required
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
        password = request.POST['password']  # Get the password from the form
        hashed_password = make_password(password)  # Hash the password
        Usuarios.objects.create(nombre=nombre, correo=correo, password=hashed_password)  # Save the hashed password
        return redirect('index')
    return render(request, 'X/formulario.html')

def editar_usuario(request, id):
    usuario = Usuarios.objects.get(id=id)
    if request.method == 'POST':
        usuario.nombre = request.POST['nombre']
        usuario.correo = request.POST['correo']
        password = request.POST['password']
        if password:
            hashed_password = make_password(password)
            usuario.password = hashed_password
        usuario.save()
        return redirect('lista')
    return render(request, 'X/modules/editar_usuario.html', {'usuario': usuario})

def eliminar_usuario(request, id):
    usuario = Usuarios.objects.get(id=id)
    usuario.delete()
    return redirect('lista')



def inicio(request):
    if request.method == 'POST':
        nombre = request.POST['nombre']
        password = request.POST['password']
        try:
            usuario = Usuarios.objects.get(nombre=nombre)
            if check_password(password, usuario.password):
                request.session['user_id'] = usuario.id  # Store user ID in session
                request.session['user_nombre'] = usuario.nombre  # Store user name in session
                next_url = request.GET.get('next')
                if next_url:
                    from django.http import HttpResponseRedirect
                    return HttpResponseRedirect(next_url)
                else:
                    return redirect('index')
            else:
                next_url = request.GET.get('next')
                if next_url:
                    from django.http import HttpResponseRedirect
                    return HttpResponseRedirect(f'/inicio/?next={next_url}&error=Revise sus creedenciales')
                else:
                    return redirect(f'/inicio/?error=Revise sus creedenciales')
        except Usuarios.DoesNotExist:
            # User not found
            next_url = request.GET.get('next')
            if next_url:
                from django.http import HttpResponseRedirect
                return HttpResponseRedirect(f'/inicio/?next={next_url}&error=Usuario no encontrado')
            else:
                return redirect(f'/inicio/?error=Usuario no encontrado')
    return render(request, 'X/inicio.html')

def logout(request):
    try:
        del request.session['user_id']
        del request.session['user_nombre']
    except KeyError:
        pass
    return redirect('index')
