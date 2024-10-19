"use strict";
const readline = require('readline');

// Variables globales
let array = new Array(4);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función principal
function Crear_Array() {
    this.ingresar = function() {
        let index = 4;

        const askForElement = () => {
            if (index >= 0) {
                rl.question(`Ingresa un elemento para la posicion ${index} del arreglo: `, (answer) => {
                    array[index] = answer;
                    index--;
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
            console.log(`Elemento de la posicion ${j + 1} del arreglo: ${array[j]}`);
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



