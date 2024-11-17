"use strict";
// Librerias (Imports)
// Ejecutar todo con consola
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Clases

class JuegosdeMesa {
    _nombre = '';
    _tipo = '';
    _descripcion = '';
    constructor(nombre = '', descripcion = '') {
        this._nombre = nombre;
        this._tipo = '';
        this._descripcion = descripcion;
    }

    seleccion(guardar) {
        console.log(`Elige un tipo de juego: `);
        console.log(`1. Cartas`);
        console.log(`2. Rol`);
        console.log(`3. Tablero`);
        rl.question("\nIngrese una opción: ", (opcion) => {
            let juego;
            if (opcion === '1') {
                juego = new Cartas();
            } else if (opcion === '2') {
                juego = new Rol();
            } else if (opcion === '3') {
                juego = new Tablero();
            } else {
                console.log('Opción no válida');
                rl.close();
                return;
            }
            guardar(juego);
        });
    }

    ingresar(guardar) {
        rl.question('Ingrese el nombre del juego: ', (nombre) => {
            this._nombre = nombre;
            rl.question('Ingrese la descripción del juego: ', (descripcion) => {
                this._descripcion = descripcion;
                guardar();
            });
        });
    }

    mostrarinfo() {
        return `\nLos datos del juego son: \nNombre: ${this._nombre} \nDescripción: ${this._descripcion}`;
    }
}

class Cartas extends JuegosdeMesa {
    constructor(nombre = '', descripcion = '', tipoDeCartas = '') {
        super(nombre, descripcion);
        this._tipo = 'Cartas';
        this._tipoDeCartas = tipoDeCartas;
    }

    ingresarjuego(guardar) {
        rl.question('Ingrese el tipo de cartas: ', (tipoDeCartas) => {
            this._tipoDeCartas = tipoDeCartas;
            guardar();
        });
    }

    mostrarinfo() {
        return `${super.mostrarinfo()}\nTipo de cartas: ${this._tipoDeCartas}`;
    }
}

class Rol extends JuegosdeMesa {
    constructor(nombre = '', descripcion = '', ambientacion = '') {
        super(nombre, descripcion);
        this._tipo = 'Rol';
        this._ambientacion = ambientacion;
    }

    ingresarjuego(guardar) {
        rl.question('Ingrese el tipo de rol: ', (ambientacion) => {
            this._ambientacion = ambientacion;
            guardar();
        });
    }

    mostrarinfo() {
        return `${super.mostrarinfo()}\nAmbientación: ${this._ambientacion}`;
    }
}

class Tablero extends JuegosdeMesa {
    constructor(nombre = '', descripcion = '', tablero = '') {
        super(nombre, descripcion);
        this._tipo = 'Tablero';
        this._tablero = tablero;
    }

    ingresarjuego(guardar) {
        rl.question('Ingrese el tipo de tablero: ', (tablero) => {
            this._tablero = tablero;
            guardar();
        });
    }

    mostrarinfo() {
        return `${super.mostrarinfo()}\nTablero: ${this._tablero}`;
    }
}

// Metodo principal
function main() {
    const juego = new JuegosdeMesa();
    juego.seleccion((juegoGuardado) => {
        juegoGuardado.ingresar(() => {
            juegoGuardado.ingresarjuego(() => {
                console.log(juegoGuardado.mostrarinfo());
                rl.close();
            });
        });
    });
}

main();
