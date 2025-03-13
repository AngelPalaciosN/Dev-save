from django.db import models

class Empleado (models.Model):
    Nombre = models.CharField((""), max_length=50)
    Apellidos = models.CharField((""), max_length=100)
    Email = models.EmailField((""), max_length=254)
    Telefono = models.CharField((""), max_length=15)
    Fecha_Contratacion = models.DateField((""), auto_now=False, auto_now_add=False)
    Salario = models.DecimalField((""), max_digits=10, decimal_places=2)
    def __str__(self):
        return f"{self.Nombre} {self.Apellidos}"


class opcion(models.Model):
    empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE)
    opcion = models.CharField(max_length=200)
    votos = models.IntegerField(default=0)
    
    def __str__(self):
        return self.opcion

class Departamento(models.Model):
    Nombre = models.CharField((""), max_length=100)
    Descripcion = models.TextField((""))
    
    def __str__(self):
        return self.Nombre

class Proyecto(models.Model):
    Nombre = models.CharField((""), max_length=200)
    Descripcion = models.TextField((""))
    Fecha_Inicio = models.DateField((""))
    Fecha_Fin = models.DateField((""))
    Empleados = models.ManyToManyField(Empleado)
    Departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.Nombre