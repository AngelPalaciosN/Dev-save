"use strict";
// Librerias (Imports)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Clases

class ConversorUnidades {
    constructor() {
        this._opcion = '';
        this._valor = 0;
        this._resultado = 0;
    }

    seleccion(guardar) {
        console.log(`Elige una opción: `);
        console.log(`1. Convertir metros a kilómetros`);
        console.log(`2. Convertir gramos a kilogramos`);
        console.log(`3. Convertir litros a mililitros`);
        console.log(`4. Convertir grados Celsius a Fahrenheit`);
        console.log(`5. Convertir kilómetros a millas`);
        rl.question("\nIngrese una opción: ", (opcion) => {
            this._opcion = opcion;
            guardar();
        });
    }

    ingresarValor(guardar) {
        rl.question("\nIngrese el valor a convertir: ", (valor) => {
            this._valor = parseFloat(valor);
            guardar();
        });
    }

    convertir() {
        switch (this._opcion) {
            case '1':
                this._resultado = ConversorUnidades.convertirMetrosAKilometros(this._valor);
                break;
            case '2':
                this._resultado = ConversorUnidades.convertirGramosAKilogramos(this._valor);
                break;
            case '3':
                this._resultado = ConversorUnidades.convertirLitrosAMililitros(this._valor);
                break;
            case '4':
                this._resultado = ConversorUnidades.convertirCelsiusAFahrenheit(this._valor);
                break;
            case '5':
                this._resultado = ConversorUnidades.convertirKilometrosAMillas(this._valor);
                break;
            default:
                console.log('Opción no válida');
                rl.close();
                return;
        }
    }

    static convertirMetrosAKilometros(valor) {
        return valor / 1000;
    }

    static convertirGramosAKilogramos(valor) {
        return valor / 1000;
    }

    static convertirLitrosAMililitros(valor) {
        return valor * 1000;
    }

    static convertirCelsiusAFahrenheit(valor) {
        return (valor * 9/5) + 32;
    }

    static convertirKilometrosAMillas(valor) {
        return valor * 0.621371;
    }

    obtenerInformacion() {
        let unidadOrigen, unidadDestino;
        switch (this._opcion) {
            case '1':
                unidadOrigen = 'metros';
                unidadDestino = 'kilómetros';
                break;
            case '2':
                unidadOrigen = 'gramos';
                unidadDestino = 'kilogramos';
                break;
            case '3':
                unidadOrigen = 'litros';
                unidadDestino = 'mililitros';
                break;
            case '4':
                unidadOrigen = 'grados Celsius';
                unidadDestino = 'grados Fahrenheit';
                break;
            case '5':
                unidadOrigen = 'kilómetros';
                unidadDestino = 'millas';
                break;
            default:
                return 'Opción no válida';
        }
        return `\nConversión: ${this._valor} ${unidadOrigen} son ${this._resultado.toFixed(2)} ${unidadDestino}`;
    }
}

// Metodo principal
function main() {
    const conversor = new ConversorUnidades();
    conversor.seleccion(() => {
        conversor.ingresarValor(() => {
            conversor.convertir();
            console.log(conversor.obtenerInformacion());
            rl.close();
        });
    });
}

main();
