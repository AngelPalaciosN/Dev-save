"use strict";
// Librerias (Imports)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Clases

class ConversorMonedas {
    constructor() {
        this._opcion = '';
        this._valor = 0;
        this._resultado = 0;
    }

    seleccion(guardar) {
        console.log(`Elige una opción: `);
        console.log(`1. Convertir dólares a pesos colombianos`);
        console.log(`2. Convertir euros a dólares`);
        console.log(`3. Convertir libras a euros`);
        console.log(`4. Convertir yenes a dólares`);
        console.log(`5. Convertir pesos mexicanos a dólares`);
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
                this._resultado = ConversorMonedas.convertirDolaresAPesosColombianos(this._valor);
                break;
            case '2':
                this._resultado = ConversorMonedas.convertirEurosADolares(this._valor);
                break;
            case '3':
                this._resultado = ConversorMonedas.convertirLibrasAEuros(this._valor);
                break;
            case '4':
                this._resultado = ConversorMonedas.convertirYenesADolares(this._valor);
                break;
            case '5':
                this._resultado = ConversorMonedas.convertirPesosMexicanosADolares(this._valor);
                break;
            default:
                console.log('Opción no válida');
                rl.close();
                return;
        }
    }

    static convertirDolaresAPesosColombianos(valor) {
        const tasaCambio = 4500; 
        return valor * tasaCambio;
    }

    static convertirEurosADolares(valor) {
        const tasaCambio = 1.1;
        return valor * tasaCambio;
    }

    static convertirLibrasAEuros(valor) {
        const tasaCambio = 1.2; 
        return valor * tasaCambio;
    }

    static convertirYenesADolares(valor) {
        const tasaCambio = 0.009;
        return valor * tasaCambio;
    }

    static convertirPesosMexicanosADolares(valor) {
        const tasaCambio = 0.05; 
        return valor * tasaCambio;
    }

    obtenerInformacion() {
        let monedaOrigen, monedaDestino;
        switch (this._opcion) {
            case '1':
                monedaOrigen = 'dólares';
                monedaDestino = 'pesos colombianos';
                break;
            case '2':
                monedaOrigen = 'euros';
                monedaDestino = 'dólares';
                break;
            case '3':
                monedaOrigen = 'libras';
                monedaDestino = 'euros';
                break;
            case '4':
                monedaOrigen = 'yenes';
                monedaDestino = 'dólares';
                break;
            case '5':
                monedaOrigen = 'pesos mexicanos';
                monedaDestino = 'dólares';
                break;
            default:
                return 'Opción no válida';
        }
        return `\nConversión: ${this._valor} ${monedaOrigen} son ${Math.round(this._resultado)} ${monedaDestino}`;
    }
}

// Metodo principal
function main() {
    const conversor = new ConversorMonedas();
    conversor.seleccion(() => {
        conversor.ingresarValor(() => {
            conversor.convertir();
            console.log(conversor.obtenerInformacion());
            rl.close();
        });
    });
}

main();
