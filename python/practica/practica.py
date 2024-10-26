import random

#Variables globales
array = [1, 2, 3, 4, 5]

# Clase principal
class crearArray():
    def __init__(self):
        self.nuevo_array = []
        self.longitud = len(array)   
             
    def cal(self):
        global array
        for i in range(self.longitud):
            array[i] = random.randint(1, 100)
        print(array)

# Metodo principal
def main():
    mi_array = crearArray()
    mi_array.cal()

#Ejecutar
if __name__ == "__main__":
    main()