"use strict";
const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Rectangulo {
    _ancho = '';
    _largo = '';

    constructor(_ancho = '', _largo = '') {
        this._ancho = _ancho;
        this._largo = _largo;
    }

    ingresarAncho(guardar) {
        rl.question('Ingrese el ancho del rectangulo: ', (ancho) => {
            const anchoN = parseFloat(ancho);
            
            if (!isNaN(anchoN) && anchoN > 0) {
                this._ancho = anchoN;
                this.ingresarLargo(guardar);
            } else {
                console.log('El ancho debe ser un número mayor que 0.');
                this.ingresarAncho(guardar);
            }
        });
    }

    ingresarLargo(guardar) {
        rl.question('Ingrese el largo del rectangulo: ', (largo) => {
            const largoN = parseFloat(largo);
            
            if (!isNaN(largoN) && largoN > 0) {
                this._largo = largoN;
                console.log(this.mostrarInfo());
                guardar();
            } else {
                console.log('El largo debe ser un número mayor que 0.');
                this.ingresarLargo(guardar);
            }
        });
    }

    seleccion(guardar) {
        console.log(`\nElige que hacer con el rectangulo: `);
        console.log(`1. Calcular Area`);
        console.log(`2. Calcular Perimetro`);
        console.log(`3. Ingresar un nuevo rectangulo`);
        console.log(`4. Salir`);
        rl.question("\nIngrese una opción: ", (opcion) => {
            switch(opcion) {
                case '1':
                    const area = this.calcularArea();
                    console.log(`\nEl área del rectángulo es: ${area}`);
                    this.continuarOperacion(guardar);
                    break;
                case '2':
                    const perimetro = this.calcularPerimetro();
                    console.log(`\nEl perímetro del rectángulo es: ${perimetro}`);
                    this.continuarOperacion(guardar);
                    break;
                case '3':
                    console.log('\nIngresando nuevo rectángulo:');
                    this.ingresarAncho(() => {
                        this.seleccion(guardar);
                    });
                    break;
                case '4':
                    console.log('\nHasta la próxima. ¡Gracias por usar el programa!');
                    rl.close();
                    guardar();
                    break;
                default:
                    console.log('Opción no válida');
                    this.continuarOperacion(guardar);
            }
        });
    }

    continuarOperacion(guardar) {
        rl.question('\n¿Desea realizar otra operación? (s/n): ', (respuesta) => {
            if (respuesta.toLowerCase() === 's') {
                this.seleccion(guardar);
            } else {
                console.log('\nGracias por usar el programa.');
                rl.close();
                guardar();
            }
        });
    }
    
    calcularArea() {
        return this._ancho * this._largo;
    }

    calcularPerimetro() {
        return 2 * (this._ancho + this._largo);
    }

    mostrarInfo() {
        return `\nLos datos del rectangulo son: \nAncho: ${this._ancho} \nLargo: ${this._largo}`;
    }
}

function main() {
    const rectangulo = new Rectangulo();
    console.log('Bienvenido al programa de cálculo de rectángulos');
    rectangulo.ingresarAncho(() => {
        rectangulo.seleccion(() => {
            console.log('Programa finalizado.');
        });
    });
}

main();