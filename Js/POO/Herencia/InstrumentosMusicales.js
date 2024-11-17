"use strict";
// Librerias (Imports)
//Ejecutar todo con consola
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Clases

class Instrumentos {
    _nombre = '';
    _sonido = '';
    _tipo = '';
    constructor(nombre = '', sonido = '', tipo = '') {
        this._nombre = nombre;
        this._sonido = sonido;
        this._tipo = tipo;
    }

    seleccion(guardar) {
        console.log(`Elige un tipo de instrumento: `);
        console.log(`1. Guitarra`);
        console.log(`2. Piano`);
        console.log(`3. Bateria`);
        rl.question("\nIngrese una opción: ", (opcion) => {
            let ins;
            if (opcion === '1') {
                ins = new Guitarra();
            } else if (opcion === '2') {
                ins = new Piano();
            } else if (opcion === '3') {
                ins = new Bateria();
            } else {
                console.log('Opción no válida');
                rl.close();
                return;
            }
            guardar(ins);
        });
    }


    tocar(){
        return `\nEl instrumento ${this._nombre} hace el sonido ${this._sonido}`;
    }

    mostrarinfo() {
        return `${this._nombre} es un instrumento de ${this._tipo}`;
    }
}


class Guitarra extends Instrumentos {
    constructor(nombre = '', sonido = '', tipo = ''){
        super(nombre, sonido, tipo);
        this._nombre = 'Guitarra';
        this._sonido = 'Strum'
        this._tipo = 'Cuerda'
        
    }

    tocar(){
        return super.tocar()
    }

    mostrarinfo() {
        return super.mostrarinfo();
    }

}

class Piano extends Instrumentos {
    constructor(nombre = '', sonido = '', tipo = ''){
        super(nombre, sonido, tipo);
        this._nombre = 'Piano'
        this._sonido = 'Tinkle'
        this._tipo = 'Percusion'

    }

    tocar(){
        return super.tocar();
    }

    mostrarinfo() {
        return super.mostrarinfo();
    }

}

class Bateria extends Instrumentos {
    constructor(nombre = '', sonido = '', tipo = ''){
        super(nombre, sonido, tipo);
        this._nombre = 'Bateria'
        this._sonido = 'Boom'
        this._tipo = 'Percusion'

    }

    tocar(){
        return super.tocar();
    }

    mostrarinfo() {
        return super.mostrarinfo();
    }
}

// Metodo principal
function main() {
    const instrumento = new Instrumentos();
    instrumento.seleccion((instrumentoGuardado) => {
            if (instrumentoGuardado instanceof Guitarra) {
                    console.log(instrumentoGuardado.tocar());
                    console.log(instrumentoGuardado.mostrarinfo());
                    rl.close();
            } else if (instrumentoGuardado instanceof Piano) {
                    console.log(instrumentoGuardado.tocar());
                    console.log(instrumentoGuardado.mostrarinfo());
                    rl.close();
            } else if (instrumentoGuardado instanceof Bateria) {
                    console.log(instrumentoGuardado.tocar());
                    console.log(instrumentoGuardado.mostrarinfo());
                    rl.close();
            } else {
                console.log(instrumentoGuardado.mostrarinfo());
                rl.close();
            }
        });
}

main();
