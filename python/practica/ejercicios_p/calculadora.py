class calculadora:
    def __init__(self, num='',can=0,guardar=None):
        self.num = num
        self.can = can
        self.guardar = [] if guardar is None else guardar
        
        
    def ingresar(self):
        self.can = int(input('Ingrese la cantidad de numeros que desea operar: '))
        for i in range(self.can):
            self.num = int(input('Ingrese un numero:'))
            self.guardar.append(self.num)
    
    def mostrar(self):
        print(f'Los numeros que se va a operar son {self.guardar}')
        
        
class suma(calculadora):
    def sumar(self):
        resula


def main():
    opr = calculadora()
    opr.ingresar()


if __name__ == "__main__":
    main()