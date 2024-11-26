"use strict";
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Forma {
    constructor() {
        if (new.target === Forma) {
            throw new Error("No se puede instanciar la clase abstracta Forma");
        }
    }

    calcularArea() {
        throw new Error("El método calcularArea debe ser implementado en la clase derivada");
    }

    calcularPerimetro() {
        throw new Error("El método calcularPerimetro debe ser implementado en la clase derivada");
    }

    mostrar() {
        console.log(`Información sobre la forma: ${this.constructor.name}`);
        console.log(`Área: ${this.calcularArea()}`);
        console.log(`Perímetro: ${this.calcularPerimetro()}`);
    }

    ingresar(guardar) {
        throw new Error("Método ingresar debe ser implementado en la clase derivada");
    }

    seleccionarOperacion(guardar) {
        throw new Error("Método seleccionarOperacion debe ser implementado en la clase derivada");
    }
}

class Rectangulo extends Forma {
    constructor(_alto = 0, _ancho = 0) {
        super();
        this._alto = _alto;
        this._ancho = _ancho;
    }

    calcularArea() {
        return this._alto * this._ancho;
    }

    calcularPerimetro() {
        return 2 * (this._alto + this._ancho);
    }

    ingresar(guardar) {
        rl.question("Ingrese el alto del rectángulo: ", (alto) => {
            this._alto = parseFloat(alto);
            rl.question("Ingrese el ancho del rectángulo: ", (ancho) => {
                this._ancho = parseFloat(ancho);
                guardar();
            });
        });
    }

    seleccionarOperacion(guardar) {
        console.log("\n¿Qué deseas hacer con el rectángulo?");
        console.log("1. Calcular área");
        console.log("2. Calcular perímetro");
        console.log("3. Mostrar información");
        console.log("4. Salir");

        rl.question("Ingrese una opción: ", (opcion) => {
            switch (opcion) {
                case '1':
                    console.log(`Área: ${this.calcularArea()}`);
                    this.seleccionarOperacion(guardar);
                    break;
                case '2':
                    console.log(`Perímetro: ${this.calcularPerimetro()}`);
                    this.seleccionarOperacion(guardar);
                    break;
                case '3':
                    this.mostrar();
                    this.seleccionarOperacion(guardar);
                    break;
                case '4':
                    rl.close();
                    break;
                default:
                    console.log("Opción no válida. Intente nuevamente.");
                    this.seleccionarOperacion(guardar);
                    break;
            }
        });
    }
}

class Circulo extends Forma {
    constructor(radio = 0) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }

    ingresar(guardar) {
        rl.question("Ingrese el radio del círculo: ", (radio) => {
            this.radio = parseFloat(radio);
            guardar();
        });
    }

    seleccionarOperacion(guardar) {
        console.log("\n¿Qué deseas hacer con el círculo?");
        console.log("1. Calcular área");
        console.log("2. Calcular perímetro");
        console.log("3. Mostrar información");
        console.log("4. Salir");

        rl.question("Ingrese una opción: ", (opcion) => {
            switch (opcion) {
                case '1':
                    console.log(`Área: ${this.calcularArea()}`);
                    this.seleccionarOperacion(guardar);
                    break;
                case '2':
                    console.log(`Perímetro: ${this.calcularPerimetro()}`);
                    this.seleccionarOperacion(guardar);
                    break;
                case '3':
                    this.mostrar();
                    this.seleccionarOperacion(guardar);
                    break;
                case '4':
                    rl.close();
                    break;
                default:
                    console.log("Opción no válida. Intente nuevamente.");
                    this.seleccionarOperacion(guardar);
                    break;
            }
        });
    }
}

// Este será el flujo general, sin necesidad de lógica dentro del main.
function seleccionarForma(guardar) {
    console.log("Selecciona una forma para trabajar:");
    console.log("1. Rectángulo");
    console.log("2. Círculo");
    console.log("3. Salir");

    rl.question("Ingrese una opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                const rectangulo = new Rectangulo();
                rectangulo.ingresar(() => {
                    rectangulo.seleccionarOperacion(guardar);
                });
                break;
            case '2':
                const circulo = new Circulo();
                circulo.ingresar(() => {
                    circulo.seleccionarOperacion(guardar);
                });
                break;
            case '3':
                rl.close();
                break;
            default:
                console.log("Opción no válida. Intente nuevamente.");
                seleccionarForma(guardar);
                break;
        }
    });
}

function main() {
    seleccionarForma(() => {});
}

main();
