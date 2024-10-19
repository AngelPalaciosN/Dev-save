"use strict";
const readline = require('readline');

// Variables globales
let array;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función principal
function Crear_Array() {
    this.definir = function() {
        rl.question('Ingrese el tamaño del array: ', (answer) => {
            const size = parseInt(answer);
            if (isNaN(size) || size <= 0) {
                console.log('Por favor, ingrese un número válido mayor que 0.');
                this.definir();
            } else {
                array = new Array(size);
                this.ingresar();
            }
        });
    };

    this.ingresar = function() {
        let i = 0; 
        const askForElement = () => {
            if (i < array.length) {
                rl.question(`Ingresa un elemento para la posición ${i} del arreglo: `, (answer) => {
                    array[i] = parseFloat(answer); 
                    i++;
                    askForElement();
                });
            } else {
                rl.close();
                console.log("\n Posicion de los elementos: \n");
                this.mostrar();
            }
        };
        askForElement();
    };

    this.sumar = function() {
        let suma = 0; 

        for (let i = 0; i < array.length; i++) {
            suma += array[i]; 
        }
        console.log(`La suma total de los elementos es: ${suma}`);
    };

    
    this.mostrar = function(){
        for (let i = 0; i < array.length; i++) {
            console.log(`Elemento de la posición ${i} del arreglo: ${array[i]}`);
        }
        console.log("\n Resultado suma: \n");
        this.sumar();
    };

}

// Método principal
function main() {
    let miArray = new Crear_Array();
    miArray.definir();
}

// Ejecutar
main();
