"use strict";

const readline = require('readline');

// Variables globales
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let array = new Array(5);
const cont = {
    Ceros: 0,
    Pos: 0,
    Neg: 0,
    Spos: 0, 
    Sneg: 0, 
    promedioPos: 0, 
    promedioNeg: 0,
};

// Función principal
function Crear_Array() {
    this.ingresar = function() {
        let i = 0; 

        const askForElement = () => {
            if (i < array.length) {
                rl.question(`Ingresa un número para la posición ${i} del arreglo: `, (answer) => {
                    array[i] = Number(answer);
                    i++;
                    askForElement(); 
                });
            } else {
                contarNumeros();
                promedios();
                mostrarResultados();
                rl.close(); 
            }
        };

        askForElement(); 
    };
}

// Función para contar y sumar los números
function contarNumeros() {
    array.forEach(element => {
        if (element === 0) {
            cont.Ceros++;
        } else if (element > 0) {
            cont.Pos++;
            cont.Spos += element; 
        } else {
            cont.Neg++;
            cont.Sneg += element; 
        }
        
    });
}

// Función para calcular promedios sin operador ternario
function promedios() {
    if (cont.Pos > 0) {
        cont.promedioPos = cont.Spos / cont.Pos;
    } else {
        cont.promedioPos = 0;
    }

    if (cont.Neg > 0) {
        cont.promedioNeg = cont.Sneg / cont.Neg;
    } else {
        cont.promedioNeg = 0;
    }
}

// Función para mostrar los resultados
function mostrarResultados() {
    console.log();
    console.log("Resultados:");
    console.log(`Ceros: ${cont.Ceros}`);
    console.log(`Positivos: ${cont.Pos}`);
    console.log(`Negativos: ${cont.Neg}`);
    console.log();
    console.log(`Promedio de positivos: ${cont.promedioPos.toFixed(1)}`);
    console.log(`Promedio de negativos: ${cont.promedioNeg.toFixed(1)}`);
}

// Método principal
function main() {
    let miArray = new Crear_Array();
    miArray.ingresar();
}

// Ejecutar la función principal
main();
