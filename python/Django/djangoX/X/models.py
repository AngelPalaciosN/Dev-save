from django.db import models

class Usuarios(models.Model):
    id= models.BigAutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    correo = models.EmailField(max_length=100)
    password = models.CharField(max_length=128)  # Use a CharField to store the hashed password
    
    class Meta:
        managed = True
        db_table= 'Usuarios'
