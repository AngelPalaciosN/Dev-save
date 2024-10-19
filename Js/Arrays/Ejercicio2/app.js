"use strict";
const readline = require('readline');

// Variables globales
let array = [1, 2, 3, 4, 5];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función principal
function Crear_Array() {
    this.ingresar = function() {
        let i = 0;

        const askForElement = () => {
            if (i < array.length) {
                rl.question(`Ingresa un elemento para la posicion ${i} del arreglo: `, (answer) => {
                    array[i] = answer;
                    i++;
                    askForElement();
                });
            } else {
                rl.close();
                console.log("\nProceso de ingreso finalizado.\n");
                this.mostrar();
            }
        };

        askForElement();
    }

    this.mostrar = function() {
        console.log("Elementos del arreglo:");
        for (let j = 0; j < array.length; j++) {
            console.log(`Elemento de la posicion ${j} del arreglo: ${array[j]}`);
        }
    }
}

// Método principal
function main() {
    let miArray = new Crear_Array();
    miArray.ingresar();
}

// Ejecutar
main();



