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
                    if (isNaN(this.#edad)) {
                        console.log('Por favor ingrese un número: ');
                        this.ingresar().then(resolve); // Reinicia el proceso si la edad no es un número
                    } else {
                        this.preguntarGenero().then(() => {
                            rl.question("Ingrese su país: ", (pais) => {
                                this.#pais = pais;
                                rl.question("Ingrese sus intereses: ", (intereses) => {
                                    this.#intereses = intereses.split(",").map((interes) => interes.trim());
                                    rl.question("Desea agregar otro interés? (s/n): ", (response) => {
                                        if (response.toLowerCase() === "s") {
                                            this.ingresarIntereses().then(resolve);
                                        } else {
                                            resolve();
                                        }
                                    });
                                });
                            });
                        });
                    }
                });
            });
        });
    }

    preguntarGenero() {
        return new Promise((resolve) => {
            rl.question("Ingrese su género (M/F): ", (genero) => {
                if (genero === "M" || genero === "F") {
                    this.#genero = genero;
                    resolve();
                } else {
                    console.log('Por favor ingrese una de las 2 opciones: M o F');
                    this.preguntarGenero().then(resolve); // Repite la pregunta si el género no es válido
                }
            });
        });
    }

    ingresarIntereses() {
        return new Promise((resolve) => {
            rl.question("Ingrese otro interés: ", (interes) => {
                this.#intereses.push(interes.trim());
                rl.question("Desea agregar otro interés? (s/n): ", (response) => {
                    if (response.toLowerCase() === "s") {
                        this.ingresarIntereses().then(resolve);
                    } else {
                        resolve();
                    }
                });
            });
        });
    }
    
    mostrar() {
        console.log(`\nSus datos son:\n nombre: ${this.#nombre}\n género: ${this.#genero}\n edad: ${this.#edad}\n país: ${this.#pais}\n intereses: ${this.#intereses.join(", ")}\n`);
        rl.close();
    }
}

// Metodo principal
function main() {
    let persona1 = new Persona("", 0, "", "", []);
    persona1.saludo();
}

main();
