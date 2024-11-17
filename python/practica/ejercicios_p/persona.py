class Persona:
    def __init__(self, nombre='', edad=0):
        self.nombre = nombre
        self.edad = edad

    def bienvenido(self):
        print(f'Bienvenido, por favor ingresa tus datos:\n')

    def seleccion(self):
        print(f'1. Estudiante')
        print(f'2. Instructor')
        print(f'3. Salir')
        opc = int(input('Ingrese su opción: '))
        return opc
        
    def ingresar(self):
        self.nombre = str(input('Ingrese su nombre: '))
        self.edad = int(input('Ingrese su edad: '))

    def mostrar(self):
        print(f'\nSus datos son:')
        print(f'Nombre: {self.nombre}')
        print(f'Edad: {self.edad}')
        
        
class Estudiante(Persona):
    def __init__(self, nombre='', edad=0, carrera=''):
        super().__init__(nombre, edad)
        self.carrera = carrera

    def ingresar(self):
        super().ingresar()
        self.carrera = str(input('Ingrese su carrera: '))

    def mostrar(self):
        super().mostrar()
        print(f'Carrera: {self.carrera}')
        

class Instructor(Persona):
    def __init__(self, nombre='', edad=0, resultado=''):
        super().__init__(nombre, edad)
        self.resultado = resultado

    def ingresar(self):
        super().ingresar()
        self.resultado = str(input('Ingrese su resultado: '))

    def mostrar(self):
        super().mostrar()
        print(f'Resultado: {self.resultado}')

def main():
    opr = Persona()
    opr.bienvenido()
    opcion = opr.seleccion()
    if opcion == 1:
        est = Estudiante()
        est.ingresar()
        est.mostrar()
    elif opcion == 2:
        ins = Instructor()
        ins.ingresar()
        ins.mostrar()
    else:
        print('Adiós')

if __name__ == "__main__":
    main()
