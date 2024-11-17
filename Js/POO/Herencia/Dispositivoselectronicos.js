"use strict";
// Librerias (Imports)
// Ejecutar todo con consola
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Clases

class Dispositivo {
    _nombre = '';
    _marca = '';
    constructor(nombre = '', marca = '') {
        this._nombre = nombre;
        this._marca = marca;
    }

    seleccion(guardar) {
        console.log(`Elige un tipo de dispositivo: `);
        console.log(`1. Teléfono`);
        console.log(`2. Computadora`);
        console.log(`3. Tablet`);
        rl.question("\nIngrese una opción: ", (opcion) => {
            let dispositivo;
            if (opcion === '1') {
                dispositivo = new Telefono();
            } else if (opcion === '2') {
                dispositivo = new Computadora();
            } else if (opcion === '3') {
                dispositivo = new Tablet();
            } else {
                console.log('Opción no válida');
                rl.close();
                return;
            }
            guardar(dispositivo);
        });
    }

    ingresar(guardar) {
        rl.question('Ingrese el nombre del dispositivo: ', (nombre) => {
            this._nombre = nombre;
            rl.question('Ingrese la marca del dispositivo: ', (marca) => {
                this._marca = marca;
                guardar();
            });
        });
    }

    mostrarinfo() {
        return `\nLos datos del dispositivo son: \nNombre: ${this._nombre} \nMarca: ${this._marca}`;
    }
}

class Telefono extends Dispositivo {
    constructor(nombre = '', marca = '', sistemaOperativo = '') {
        super(nombre, marca);
        this._sistemaOperativo = sistemaOperativo;
    }

    ingresarDispositivo(guardar) {
        rl.question('Ingrese el sistema operativo del teléfono: ', (sistemaOperativo) => {
            this._sistemaOperativo = sistemaOperativo;
            guardar();
        });
    }

    mostrarinfo() {
        return `${super.mostrarinfo()}\nSistema Operativo: ${this._sistemaOperativo}`;
    }
}

class Computadora extends Dispositivo {
    constructor(nombre = '', marca = '', ram = '') {
        super(nombre, marca);
        this._ram = ram;
    }

    ingresarDispositivo(guardar) {
        rl.question('Ingrese la cantidad de RAM de la computadora: ', (ram) => {
            this._ram = ram;
            guardar();
        });
    }

    mostrarinfo() {
        return `${super.mostrarinfo()}\nRAM: ${this._ram}`;
    }
}

class Tablet extends Dispositivo {
    constructor(nombre = '', marca = '', tamanoPantalla = '') {
        super(nombre, marca);
        this._tamanoPantalla = tamanoPantalla;
    }

    ingresarDispositivo(guardar) {
        rl.question('Ingrese el tamaño de pantalla de la tablet: ', (tamanoPantalla) => {
            this._tamanoPantalla = tamanoPantalla;
            guardar();
        });
    }

    mostrarinfo() {
        return `${super.mostrarinfo()}\nTamaño de Pantalla: ${this._tamanoPantalla}`;
    }
}

// Metodo principal
function main() {
    const dispositivo = new Dispositivo();
    dispositivo.seleccion((dispositivoGuardado) => {
        dispositivoGuardado.ingresar(() => {
            dispositivoGuardado.ingresarDispositivo(() => {
                console.log(dispositivoGuardado.mostrarinfo());
                rl.close();
            });
        });
    });
}

main();
