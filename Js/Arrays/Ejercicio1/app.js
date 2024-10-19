"use strict";
//Variables globales
let array = [1, 2, 3, 4, 5];

//Funcion_principal
function Crear_Array() {
    this.cal = function() {
        for(let i = 0; i < array.length; i++) {
            array[i] = Math.floor(Math.random() * 100);
        }
        console.log(array);
    }
}

//Metodo principal
function main() {
    let miArray = new Crear_Array();
    miArray.cal();
}

//Ejecutar
main();