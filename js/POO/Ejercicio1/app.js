"use strict";
// Librerias (Imports)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Clases
class Persona {
    #nombre;
    #edad;
    #genero;
    #pais;
    #intereses = [];

    constructor(nombre, edad, genero, pais, intereses) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#genero = genero;
        this.#pais = pais;
        this.#intereses = intereses;
    }

    saludo() {
        console.log("Bienvenido, por favor ingresa tus datos...\n");
        this.ingresar().then(() => {
            this.mostrar();
        });
    }

    ingresar() {
        return new Promise((resolve) => {
            rl.question("Ingrese su nombre: ", (nombre) => {
                this.#nombre = nombre;
                rl.question("Ingrese su edad: ", (edad) => {
                    this.#edad = parseInt(edad);
                    rl.question("Ingrese su género (M/F): ", (genero) => {
                        this.#genero = genero;
                        rl.question("Ingrese su país: ", (pais) => {
                            this.#pais = pais;
                            rl.question("Ingrese sus intereses: ", (intereses) => {
                                this.#intereses = intereses.split(",").map((interes) => interes.trim());
                                rl.question("Desea agregar otro interés? (s/n): ", (response) => {
                                    if (response === "s") {
                                        this.ingresarIntereses().then(resolve);
                                    } else {
                                        resolve();
                                    }
                                });
                            });
                        });
                    });
                });
            });
        });
    }

    ingresarIntereses() {
        return new Promise((resolve) => {
            rl.question("Ingrese otro interés: ", (interes) => {
                this.#intereses.push(interes.trim());
                rl.question("Desea agregar otro interés? (s/n): ", (response) => {
                    if (response === "s") {
                        this.ingresarIntereses().then(resolve);
                    } else {
                        resolve();
                    }
                });
            });
        });
    }

    mostrar() {
        console.log(`Sus datos son:\n nombre: ${this.#nombre}\n género: ${this.#genero}\n edad: ${this.#edad}\n país: ${this.#pais}\n intereses: ${this.#intereses.join(", ")}\n`);
        rl.close();
    }
}

// Metodo principal
function main() {
    let persona1 = new Persona("", 0, "", "", []);
    persona1.saludo();
}

main();
