"use strict";
// Librerias (Imports)
//Ejecutar todo con consola
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Clases
class Tienda {
    _nombre = '';
    _precio = 0;
    constructor(nombre = '', precio = 0) {
        this._nombre = nombre;
        this._precio = precio;
    }

    seleccion(guardar) {
        console.log(`Elige un tipo de producto: `);
        console.log(`1. Ropa`);
        console.log(`2. Electronico`);
        console.log(`3. Alimento`);
        rl.question("\nIngrese una opción: ", (opcion) => {
            let producto;
            if (opcion === '1') {
                producto = new Ropa();
            } else if (opcion === '2') {
                producto = new Electronico();
            } else if (opcion === '3') {
                producto = new Alimento();
            } else {
                console.log('Opción no válida');
                rl.close();
                return;
            }
            guardar(producto);
        });
    }

    ingresar(guardar) {
        rl.question('Ingrese el nombre del producto: ', (nombre) => {
            this._nombre = nombre;
            rl.question('Ingrese el precio del producto: ', (precio) => {
                this._precio = parseFloat(precio);
                guardar();
            });
        });
    }

    mostrarinfo() {
        return `\nLos datos del producto son: \nNombre: ${this._nombre} \nPrecio: ${this._precio}`;
    }
}

class Ropa extends Tienda {
    constructor(nombre = '', precio = 0, talla = '') {
        super(nombre, precio);
        this._talla = talla;
    }

    ingresarProductos(guardar) {
        rl.question("Ingrese la talla de la prenda: ", (talla) => {
            this._talla = talla;
            guardar();
        });
    }

    mostrarinfo() {
        return `${super.mostrarinfo()}\nTalla: ${this._talla}`;
    }
}

class Electronico extends Tienda {
    constructor(nombre = '', precio = 0, garantia = 0) {
        super(nombre, precio);
        this._garantia = garantia;
    }

    ingresarProductos(guardar) {
        rl.question("Ingrese la garantía del producto (años): ", (garantia) => {
            this._garantia = parseFloat(garantia);
            guardar();
        });
    }

    mostrarinfo() {
        return `${super.mostrarinfo()}\nGarantía: ${this._garantia} años`;
    }
}

class Alimento extends Tienda {
    constructor(nombre = '', precio = 0, fechaCaducidad = '') {
        super(nombre, precio);
        this._fechaCaducidad = fechaCaducidad;
    }

    ingresarProductos(guardar) {
        rl.question("Ingrese la fecha de caducidad del producto: ", (fechaCaducidad) => {
            this._fechaCaducidad = fechaCaducidad;
            guardar();
        });
    }

    mostrarinfo() {
        return `${super.mostrarinfo()}\nFecha de Caducidad: ${this._fechaCaducidad}`;
    }
}

// Metodo principal
function main() {
    const producto = new Tienda();
    producto.seleccion((productoGuardado) => {
        productoGuardado.ingresar(() => {
            if (productoGuardado instanceof Ropa) {
                productoGuardado.ingresarProductos(() => {
                    console.log(productoGuardado.mostrarinfo());
                    rl.close();
                });
            } else if (productoGuardado instanceof Electronico) {
                productoGuardado.ingresarProductos(() => {
                    console.log(productoGuardado.mostrarinfo());
                    rl.close();
                });
            } else if (productoGuardado instanceof Alimento) {
                productoGuardado.ingresarProductos(() => {
                    console.log(productoGuardado.mostrarinfo());
                    rl.close();
                });
            } else {
                console.log(productoGuardado.mostrarinfo());
                rl.close();
            }
        });
    });
}

main();
