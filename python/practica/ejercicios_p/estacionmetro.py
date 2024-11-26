from abc import ABC, abstractmethod

class EstacionMetro(ABC):
    @abstractmethod
    def __init__(self, nombre='', direccion=''):
        ...

    @abstractmethod
    def mostrar_nombre(self):
        ...

    @abstractmethod
    def mostrar_linea(self):
        ...

    @abstractmethod
    def mostrar_hora_apertura(self):
        ...

    def mostrar_hora_cierre(self):
        ...

    @abstractmethod
    def mostrar(self):
        ...

        
        
class EstacionSanAntonio(EstacionMetro):
    def __init__(self, nombre, direccion):
        self.nombre = nombre
        self.direccion = direccion
    



class EstacionAcevedo(EstacionMetro):
    def __init__(self, nombre, direccion):
        self.nombre = nombre
        self.direccion = direccion

def main():
    pass

if __name__ == "__main__":
    main()
