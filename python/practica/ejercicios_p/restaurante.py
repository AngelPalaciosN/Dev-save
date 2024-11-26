class Restaurante:
    def __init__(self, nombre='', direccion=''):
        self.nombre = nombre
        self.direccion = direccion
        self.platos = []
        self.precios = []

    def bienvenido(self):
        print(f'Bienvenido al sistema de restaurantes\n')

    def seleccion(self):
        print(f'1. Restaurante Mexicano')
        print(f'2. Restaurante Paisa')
        print(f'3. Salir')
        opc = int(input('Ingrese su opción: '))
        return opc
        
    def ingresar(self):
        self.nombre = str(input('Ingrese nombre del restaurante: '))
        self.direccion = str(input('Ingrese dirección: '))

    def agregar_plato(self):
        plato = str(input('Ingrese nombre del plato: '))
        precio = int(input('Ingrese precio del plato: '))
        self.platos.append(plato)
        self.precios.append(precio)

    def mostrar(self):
        print(f'\nDatos del restaurante:')
        print(f'Nombre: {self.nombre}')
        print(f'Dirección: {self.direccion}')
        
class RestauranteMexicano(Restaurante):
    def __init__(self, nombre='', direccion='', especialidad=''):
        super().__init__(nombre, direccion)
        self.especialidad = especialidad

    def ingresar(self):
        super().ingresar()
        self.especialidad = str(input('Ingrese especialidad mexicana: '))
        cantidad = int(input('¿Cuántos platos desea agregar? '))
        for _ in range(cantidad):
            self.agregar_plato()

    def mostrar(self):
        super().mostrar()
        print(f'Especialidad: {self.especialidad}')
        print('\nMenú disponible:')
        for plato, precio in zip(self.platos, self.precios):
            print(f'{plato}: ${precio}')

class RestaurantePaisa(Restaurante):
    def __init__(self, nombre='', direccion='', region=''):
        super().__init__(nombre, direccion)
        self.region = region

    def ingresar(self):
        super().ingresar()
        self.region = str(input('Ingrese región paisa: '))
        cantidad = int(input('¿Cuántos platos desea agregar? '))
        for _ in range(cantidad):
            self.agregar_plato()

    def mostrar(self):
        super().mostrar()
        print(f'Región: {self.region}')
        print('\nMenú disponible:')
        for plato, precio in zip(self.platos, self.precios):
            print(f'{plato}: ${precio}')

def main():
    rest = Restaurante()
    rest.bienvenido()
    opcion = rest.seleccion()
    
    if opcion == 1:
        mex = RestauranteMexicano()
        mex.ingresar()
        mex.mostrar()
    elif opcion == 2:
        paisa = RestaurantePaisa()
        paisa.ingresar()
        paisa.mostrar()
    else:
        print('¡Gracias por su visita!')

if __name__ == "__main__":
    main()