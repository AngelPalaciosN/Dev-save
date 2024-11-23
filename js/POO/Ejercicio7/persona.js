"use strict";
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Persona {
    _nombre = '';
    _edad = 0;

    constructor(_nombre, _edad) {
        this._nombre = _nombre;
        this._edad = _edad;
    }

    ingresarNombre(guardar) {
        rl.question("\nIngrese su nombre: ", (nombre) => {
            this._nombre = nombre;
            guardar();
        });
    }

    ingresarEdad(guardar) {
        rl.question("Ingrese su edad: ", (edad) => {
            this._edad = parseInt(edad);
            guardar();
        });
    }

    seleccionN(guardar) {
        rl.question("¿Quieres cambiar tu nombre? (s/n): ", (opcion) => {
            if (opcion.toLowerCase() === 's') {
                rl.question("Ingrese el nuevo nombre: ", (nuevoNombre) => {
                    this.nombre = nuevoNombre;
                    console.log(`Nombre actualizado a: ${this.nombre}`);
                    this.seleccion(guardar);  
                });
            } else {
                console.log("No se cambió el nombre.");
                this.seleccion(guardar);
            }
        });
    }

    seleccionE(guardar) {
        rl.question("¿Quieres cambiar tu edad? (s/n): ", (opcion) => {
            if (opcion.toLowerCase() === 's') {
                rl.question("Ingrese la nueva edad: ", (nuevaEdad) => {
                    this.edad = parseInt(nuevaEdad);
                    console.log(`Edad actualizada a: ${this.edad}`);
                    this.seleccion(guardar); 
                });
            } else {
                console.log("No se cambió la edad.");
                this.seleccion(guardar); 
            }
        });
    }

    mostrar() {
        console.log(`\nSus datos son:\nNombre: ${this.nombre}\nEdad: ${this.edad}`);
        rl.close();
    }

    seleccion(guardar) {
        console.log("\n¿Qué desea cambiar?");
        console.log("1. Cambiar nombre");
        console.log("2. Cambiar edad");
        console.log("3. No cambiar nada");

        rl.question("Ingrese una opción: ", (opcion) => {
            switch (opcion) {
                case '1':
                    this.seleccionN(guardar);
                    break;
                case '2':
                    this.seleccionE(guardar);
                    break;
                case '3':
                    console.log("No se realizó ningún cambio.");
                    this.mostrar();
                    break;
                default:
                    console.log("Opción no válida. Intente nuevamente.");
                    this.seleccion(guardar);
                    break;
            }
        });
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get edad() {
        return this._edad;
    }

    set edad(nuevaEdad) {
        this._edad = nuevaEdad;
    }
}

function main() {
    const persona = new Persona();
    persona.ingresarNombre(() => {
        persona.ingresarEdad(() => {
            console.log(`\nNombre ingresado: ${persona.nombre}`);
            console.log(`Edad ingresada: ${persona.edad}`);

            persona.seleccion(() => {
                console.log("\n Finalizado....");
            });
        });
    });
}

main();
