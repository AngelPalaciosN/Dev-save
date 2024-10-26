"use strict";

const readline = require('readline');

// Variables globales
let carreras = [
    { clave: 'ADSO', descripcion: 'Análisis y Desarrollo de Sistemas de Información. Enfocado en la creación de software y gestión de bases de datos.' },
    { clave: 'TPS', descripcion: 'Técnico en Programación de Sistemas. Formación en programación y desarrollo de aplicaciones.' },
    { clave: 'AD', descripcion: 'Administración. Capacitación en gestión empresarial y administración de recursos.' },
    { clave: 'MULTIMEDIA', descripcion: 'Diseño y Producción de Multimedia. Especialización en diseño gráfico y producción de contenido digital.' },
    { clave: 'MECANICA EN MOTORES DISEL', descripcion: 'Mecánica en Motores Diésel. Formación en reparación y mantenimiento de motores diésel.' }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funciones principales

function Seleccion() {
    this.seleccion = function () {
        console.log('\nSeleccione una opción:');
        
        let index = 1;
        carreras.forEach(carrera => {
            console.log(`${index}. Información sobre ${carrera.clave}`);
            index++;
        });

        console.log(`${index}. Añadir carrera`);
        console.log(`${index + 1}. Cambiar orden (mover última carrera a primera)`);
        console.log(`${index + 2}. Eliminar (primera carrera)`);
        console.log(`${index + 3}. Salir`);

        rl.question('Opción: ', (answer) => {
            console.log();
            ProcesarSeleccion(answer, index);
        });
    }
}

function ProcesarSeleccion(opcion, totalOpciones) {
    const opcionNumerica = parseInt(opcion);
    
    if (opcionNumerica >= 1 && opcionNumerica <= totalOpciones + 3) {
        if (opcionNumerica <= totalOpciones - 1) { 
            const carreraSeleccionada = carreras[opcionNumerica - 1];
            console.log(carreraSeleccionada.descripcion);
        } else if (opcionNumerica === totalOpciones) {
            añadirop();
            return; 
        } 
        else if (opcionNumerica === totalOpciones + 1) { 
            cambiarOrden(); 
            return; 
        }
        else if (opcionNumerica === totalOpciones + 2) { 
            EliminarPrimeraCarrera(); 
            return; 
        }
        else if (opcionNumerica === totalOpciones + 3) { 
            console.log('Saliendo...');
            rl.close();
            return; 
        }
    } else {
        console.log('Opción incorrecta.');
    }
    
    new Seleccion().seleccion();
}

function añadirop() {
    rl.question('Introduzca la carrera nueva: ', (carrera) => {
        rl.question('Introduzca la descripción de la carrera: ', (descripcion) => {
            carreras.push({ clave: carrera, descripcion });
            console.log();
            console.log(`Carrera añadida: ${carrera}`);
            new Seleccion().seleccion();
        });
    });
}

function cambiarOrden() {
    if (carreras.length > 1) {
        const ultimaCarrera = carreras.pop();
        carreras.unshift(ultimaCarrera);
        console.log('Orden cambiado correctamente.');
    } else {
        console.log('No se puede cambiar el orden.');
    }
    
    new Seleccion().seleccion();
}

function EliminarPrimeraCarrera() {
    if (carreras.length > 0) {
        const carreraEliminada = carreras.shift();
        console.log(`Carrera eliminada: ${carreraEliminada.clave}`);
    } else {
        console.log('No hay carreras para eliminar.');
    }
    
    new Seleccion().seleccion();
}

// Función principal
function main() {
    let menu = new Seleccion();
    menu.seleccion();
}

main();
