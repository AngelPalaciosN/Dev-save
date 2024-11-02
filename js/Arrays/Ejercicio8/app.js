"use strict";

const readline = require('readline');
// Variables Globales

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nums = [];

let matriz = [[nums]];

let min = matriz[0][0];
let max = matriz[0][0];



//Funcion principal
function matriz_max(){
    this.ingresar = function(){
        rl.question('Que numero desea añadir a la matriz? ', (answer) => {
            let num = parseInt(answer);
            nums.push(num);
            rl.question('Desea ingresar otro numero? (s/n) ', (response) => {
                if (response === 's') {
                    this.ingresar();
                } else {
                    console.table(matriz);
                }
                rl.close();
            });
        });
    }
}


//Metodo
function main(){
    let start = new matriz_max();
    start.ingresar();
}

//Ejecutar
main();