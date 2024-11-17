"use strict";
// Librerias (Imports)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Clases

class Empleados {
    constructor(nombre = '', salarioBruto = 0) {
        this._nombre = nombre;
        this._salarioBruto = salarioBruto;
        this._salarioNeto = 0;
        this._salarioTotal = 0;
    }

    seleccion(guardar) {
        console.log(`Elige una opción: `);
        console.log(`1. Gerente`);
        console.log(`2. Desarrollador`);
        console.log(`3. Vendedor`);
        rl.question("\nIngrese una opción: ", (opcion) => {
            let empleado;
            if (opcion === '1') {
                empleado = new Gerente();
            } else if (opcion === '2') {
                empleado = new Desarrollador();
            } else if (opcion === '3') {
                empleado = new Vendedor();
            } else {
                console.log('Opción no válida');
                rl.close();
                return;
            }
            guardar(empleado);
        });
    }

    ingresar(guardar) {
        rl.question("\nIngrese el nombre del empleado: ", (nombre) => {
            this._nombre = nombre;
            rl.question("Ingrese el salario bruto del empleado: ", (salarioBruto) => {
                this._salarioBruto = parseInt(salarioBruto);
                this.CalcularSalario();
                guardar();
            });
        });
    }

    obtenerInformacion() {
        return `\nLos datos son: \nNombre: ${this._nombre}, Salario Bruto: ${this._salarioBruto.toFixed(0)}, Salario Neto: ${this._salarioNeto.toFixed(0)}, Salario Total: ${this._salarioTotal.toFixed(0)}`;
    }

    CalcularSalario() {
        // Deducciones aproximadas (salud y pensión)
        const deducciones = this._salarioBruto * 0.08; // 4% salud + 4% pensión
        this._salarioNeto = this._salarioBruto - deducciones;

        // Prestaciones sociales aproximadas
        const prima = this._salarioBruto / 12; // Prima de servicios
        const cesantias = this._salarioBruto / 12; // Cesantías
        const interesesCesantias = cesantias * 0.12; // Intereses sobre cesantías
        const vacaciones = this._salarioBruto / 24; // Vacaciones

        this._salarioTotal = this._salarioNeto + prima + cesantias + interesesCesantias + vacaciones;
    }
}

class Gerente extends Empleados {}

class Desarrollador extends Empleados {
    constructor(nombre = '', salarioBruto = 0, lenguajesProgramacion = []) {
        super(nombre, salarioBruto);
        this._lenguajesProgramacion = lenguajesProgramacion;
    }

    ingresarLenguajes(guardar) {
        rl.question("Ingrese un lenguaje de programación (o '2' para terminar): ", (lenguaje) => {
            if (lenguaje === '2') {
                guardar();
            } else {
                this._lenguajesProgramacion.push(lenguaje);
                this.ingresarLenguajes(guardar);
            }
        });
    }

    obtenerInformacion() {
        return `${super.obtenerInformacion()}\nLenguajes de programación: ${this._lenguajesProgramacion.join(', ')}`;
    }
}

class Vendedor extends Empleados {
    constructor(nombre = '', salarioBruto = 0, productos = [], ventas = []) {
        super(nombre, salarioBruto);
        this._productos = productos;
        this._ventas = ventas;
    }

    ingresarProductos(guardar) {
        rl.question("Ingrese un producto (o '2' para terminar): ", (producto) => {
            if (producto === '2') {
                guardar();
            } else {
                this._productos.push(producto);
                this.ingresarProductos(guardar);
            }
        });
    }

    ingresarVentas(guardar) {
        rl.question("Ingrese el valor de la venta (o '2' para terminar): ", (venta) => {
            if (venta === '2') {
                guardar();
            } else {
                this._ventas.push(parseFloat(venta));
                this.ingresarVentas(guardar);
            }
        });
    }

    obtenerInformacion() {
        return `${super.obtenerInformacion()}\nProductos: ${this._productos.join(', ')}\nVentas: ${this._ventas.map(v => v.toFixed(0)).join(', ')}`;
    }
}

// Metodo principal
function main() {
    const empleado = new Empleados();
    empleado.seleccion((empleadoGuardado) => {
        empleadoGuardado.ingresar(() => {
            if (empleadoGuardado instanceof Desarrollador) {
                empleadoGuardado.ingresarLenguajes(() => {
                    console.log(empleadoGuardado.obtenerInformacion());
                    rl.close();
                });
            } else if (empleadoGuardado instanceof Vendedor) {
                empleadoGuardado.ingresarProductos(() => {
                    empleadoGuardado.ingresarVentas(() => {
                        console.log(empleadoGuardado.obtenerInformacion());
                        rl.close();
                    });
                });
            } else {
                console.log(empleadoGuardado.obtenerInformacion());
                rl.close();
            }
        });
    });
}

main();
