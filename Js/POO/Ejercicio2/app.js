"use strict";
// Librerias (Imports)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Clases

class Mascota {
    constructor(nombre = '', edad = 0, color = '') {
        this._nombre = nombre;
        this._edad = edad;
        this._color = color;
    }

    seleccion(guardar) {
        console.log(`Elige una opción: `);
        console.log(`1. Perro`);
        console.log(`2. Gato`);
        console.log(`3. Tortuga`);
        rl.question("\nIngrese una opción: ", (opcion) => {
            let mascota;
            if (opcion === '1') {
                mascota = new Perro();
            } else if (opcion === '2') {
                mascota = new Gato();
            } else if (opcion === '3') {
                mascota = new Tortuga();
            } else {
                console.log('Opción no válida');
                rl.close();
                return;
            }
            guardar(mascota);
        });
    }

    ingresar(guardar) {
        rl.question("\nIngrese el nombre de la mascota: ", (nombre) => {
            this._nombre = nombre;
            rl.question("Ingrese la edad de la mascota: ", (edad) => {
                this._edad = parseInt(edad);
                rl.question("Ingrese el color de la mascota: ", (color) => {
                    this._color = color;
                    guardar();
                });
            });
        });
    }

    obtenerInformacion() {
        return `\nLos datos son: \nNombre: ${this._nombre}, Edad: ${this._edad}, Color: ${this._color}`;
    }

    dormir() {
        console.log(`${this._nombre} está durmiendo`);
    }

    ladrar() {
        console.log(`${this._nombre} está ladrando`);
    }

    maullar() {
        console.log(`${this._nombre} está maullando`);
    }

    esconderse() {
        console.log(`${this._nombre} está escondiéndose`);
    }
}

class Perro extends Mascota {
    accion() {
        super.ladrar();
    }
}

class Gato extends Mascota {
    constructor(nombre = '', edad = 0, color = '', juegaConLaser = false) {
        super(nombre, edad, color);
        this._juegaConLaser = juegaConLaser;
    }

    accion() {
        super.maullar();
    }
}

class Tortuga extends Mascota {
    accion() {
        super.esconderse();
    }
}

// Metodo principal
function main() {
    const mascota = new Mascota();
    mascota.seleccion((mascotaGuardada) => {
        mascotaGuardada.ingresar(() => {
            console.log(mascotaGuardada.obtenerInformacion());
            mascotaGuardada.accion();
            rl.close();
        });
    });
}

main();
