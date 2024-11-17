import math

class Figuras:
    def __init__(self, base=0, altura=0, radio=0):
        self.base = base
        self.altura = altura
        self.radio = radio

    def bienvenido(self):
        print('Bienvenido a la calculadora de áreas')

    def seleccion(self):
        print('1. Triángulo')
        print('2. Rectángulo')
        print('3. Círculo')
        opcion = int(input('Ingrese la opción: '))
        return opcion

    def ingresar(self):
        if self.nombre == 'Triángulo':
            self.base = float(input('Ingrese la base del triángulo: '))
            self.altura = float(input('Ingrese la altura del triángulo: '))
        elif self.nombre == 'Rectángulo':
            self.base = float(input('Ingrese la base del rectángulo: '))
            self.altura = float(input('Ingrese la altura del rectángulo: '))
        elif self.nombre == 'Círculo':
            self.radio = float(input('Ingrese el radio del círculo: '))

    def _calcular_area(self):
        if self.nombre == 'Triángulo':
            return self.base * self.altura / 2
        elif self.nombre == 'Rectángulo':
            return self.base * self.altura
        elif self.nombre == 'Círculo':
            return math.pi * self.radio ** 2

    def mostrar(self):
        area = self._calcular_area()
        if self.nombre == 'Triángulo':
            print(f'El área del triángulo es: {area}')
        elif self.nombre == 'Rectángulo':
            print(f'El área del rectángulo es: {area}')
        elif self.nombre == 'Círculo':
            print(f'El área del círculo es: {area}')
        else:
            print('Opción no válida')

class Triangulo(Figuras):
    def __init__(self, base=0, altura=0):
        super().__init__(base, altura)
        self.nombre = 'Triángulo'

class Rectangulo(Figuras):
    def __init__(self, base=0, altura=0):
        super().__init__(base, altura)
        self.nombre = 'Rectángulo'

class Circulo(Figuras):
    def __init__(self, radio=0):
        super().__init__(radio=radio)
        self.nombre = 'Círculo'

def main():
    fig = Figuras()
    fig.bienvenido()
    opcion = fig.seleccion()
    if opcion == 1:
        figura = Triangulo()
