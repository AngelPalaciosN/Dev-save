"use strict";
//imports
const readline = require('readline');

// Variables Globales

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let matriz = [];

let min,max;

function restart(){
    this.res = function(){
        new matriz_max().ingresar();
    }
}


//Funcion principal
function matriz_max(){
    this.ingresar = function(){
        rl.question('Ingrese un numero: ', (answer) => {
            let num = parseInt(answer);
            let fila = answer.split(',').map(num => parseInt(num.trim()));
            if (isNaN(num)){
                console.log('Porfavor, Ingrese un numero correcto')
                new restart().res();
            }else{
            matriz.push(fila);
            rl.question('Desea ingresar otro numero? (s/n) ', (response) => {
                if (response === 's') {
                   new restart().res();
                } else if (response === 'n'){
                    min = Math.min(...matriz.flat());
                    max = Math.max(...matriz.flat());
                    console.table(matriz);
                    console.log();
                    console.log(`El numero menor es ${min} y el mayor es ${max}`);
                    new esquina().esc();
                    rl.close();
                }else{
                    console.log('Elija una opcion correcta');
                    new restart().res();
                }
                });
            }});
        }
}

function esquina(){
    let resul = 0;
    this.esc = function(){
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz.length; j++) {
                matriz[i][j] = this.resul;
                console.log(resul)             
            }
            
        }
    }


}

//Metodo
function main(){
    let start = new matriz_max();
    start.ingresar();
}

//Ejecutar
main();