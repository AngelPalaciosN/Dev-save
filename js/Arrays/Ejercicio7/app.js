"use strict";

const readline = require('readline');

// Variables globales
let colecciones = {
    Carreras: [
        { clave: 'ADSO', descripcion: 'Análisis y Desarrollo de Sistemas de Información. Enfocado en la creación de software y gestión de bases de datos.' },
        { clave: 'TPS', descripcion: 'Técnico en Programación de Sistemas. Formación en programación y desarrollo de aplicaciones.' },
        { clave: 'AD', descripcion: 'Administración. Capacitación en gestión empresarial y administración de recursos.' },
        { clave: 'MULTIMEDIA', descripcion: 'Diseño y Producción de Multimedia. Especialización en diseño gráfico y producción de contenido digital.' },
        { clave: 'MECANICA EN MOTORES DISEL', descripcion: 'Mecánica en Motores Diésel. Formación en reparación y mantenimiento de motores diésel.' }
    ],
    Carreras2: []
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function bienvenido(){
    this.bi = function(){
        console.log(`Bienvenido, la programa selector de carreras, tendras varias opciones\n`);
        console.log('--Primero podra elegir añadir a una de las 2 plantillas mas carreras por defecto');
        console.log(`--Luego podra elegir editar, eliminar o ver la información de las carreras\n`);
        
        rl.question('Si desea añadir valores nuevos a las carreras prestablecida presione 1\nde lo contrario 2: ', (answer) => {
            console.log();
            this.co(answer);
        });
    }

    this.co = (opc) => {
        let op = parseInt(opc);
        switch(op){
            case 1:
                new ad().add(); 
                break;
            case 2:
                new pre().pre();   
                break;
            default:
                console.log('Opción no válida, intente de nuevo');
                this.bi();
        }
    }
}

function ad() {
    this.add = function() {
        console.log('\nSeleccione la colección donde desea agregar:');
        Object.keys(colecciones).forEach((coleccion, index) => {
            console.log(`${index + 1}. ${coleccion}`);
        });
        console.log('0. Volver al menú principal');

        rl.question('Número de colección: ', (numColeccion) => {
            const coleccionesArray = Object.keys(colecciones);
            const indice = parseInt(numColeccion) - 1;
            
            if (numColeccion === '0') {
                new pre().pre();
            } else if (indice >= 0 && indice < coleccionesArray.length) {
                const nombreColeccion = coleccionesArray[indice];
                
                console.log(`\nAgregando carrera a la colección: ${nombreColeccion}`);
                console.log('(Presione Enter sin escribir nada para cancelar)');
                
                rl.question('Clave: ', (clave) => {
                    if (clave.trim() === '') {
                        console.log('Operación cancelada');
                        new pre().pre();
                        return;
                    }
                    
                    rl.question('Descripción: ', (descripcion) => {
                        if (descripcion.trim() === '') {
                            console.log('Operación cancelada');
                            new pre().pre();
                            return;
                        }
                        
                        colecciones[nombreColeccion].push({ clave, descripcion });
                        console.log(`Carrera agregada: ${clave} a ${nombreColeccion}`);
                        
                        rl.question('\n¿Desea agregar otra carrera? (s/n): ', (respuesta) => {
                            if (respuesta.toLowerCase() === 's') {
                                this.add();
                            } else {
                                new pre().pre();
                            }
                        });
                    });
                });
            } else {
                console.log('Colección inválida');
                this.add();
            }
        });
    }
}


function pre(){
    console.log('\nSeleccione una colección:');
    console.log(`\nElige una opcion, 1. Predeterminadas, 2. Plantilla vacia`)
    Object.keys(colecciones).forEach((coleccion, index) => {
        console.log(`${index + 1}. ${coleccion}`);
    });
    
    this.pre = function () {
        rl.question('Elija una carrera: ', (answer) => {
            console.log();
            new Seleccion().seleccion(answer);
        });
    }
}

function Seleccion() {
    this.seleccion = function (op) {
        const opcion = parseInt(op);
        const coleccionesArray = Object.keys(colecciones);
        
        if (opcion >= 1 && opcion <= coleccionesArray.length) {
            const coleccionSeleccionada = coleccionesArray[opcion - 1];
            mostrarMenuColeccion(coleccionSeleccionada);
        } else {
            console.log('Opción inválida');
            new pre().pre();
        }
    }
}

function mostrarMenuColeccion(nombreColeccion) {
    console.log(`\nGestionando ${nombreColeccion}:`);
    let index = 1;
    colecciones[nombreColeccion].forEach(carrera => {
        console.log(`${index}. Información sobre ${carrera.clave}`);
        index++;
    });

    console.log(`${index}. Añadir carrera`);
    console.log(`${index + 1}. Cambiar orden (mover última carrera a primera)`);
    console.log(`${index + 2}. Eliminar (primera carrera)`);
    console.log(`${index + 3}. Eliminar (ultima carrera)`);
    console.log(`${index + 4}. Salir`);

    rl.question('Opción: ', (answer) => {
        console.log();
        ProcesarSeleccion(answer, index, nombreColeccion);
    });
}

function ProcesarSeleccion(opcion, totalOpciones, nombreColeccion) {
    const opcionNumerica = parseInt(opcion);
    const coleccionActual = colecciones[nombreColeccion];
    
    if (opcionNumerica >= 1 && opcionNumerica <= totalOpciones + 4) {
        if (opcionNumerica <= totalOpciones - 1) { 
            const carreraSeleccionada = coleccionActual[opcionNumerica - 1];
            console.log(carreraSeleccionada.descripcion);
            mostrarMenuColeccion(nombreColeccion);
        } else if (opcionNumerica === totalOpciones) {
            añadirCarrera(nombreColeccion);
        } 
        else if (opcionNumerica === totalOpciones + 1) { 
            cambiarOrden(nombreColeccion); 
        }
        else if (opcionNumerica === totalOpciones + 2) { 
            EliminarPrimeraCarrera(nombreColeccion); 
        }
        else if (opcionNumerica === totalOpciones + 3) { 
            EliminarUltimaCarrera(nombreColeccion); 
        }
        else if (opcionNumerica === totalOpciones + 4) {
            console.log('Mostrando tablas.....') 
            lista_datos(nombreColeccion); 
            console.log('Saliendo...');
            rl.close();
        }
    } else {
        console.log('Opción incorrecta.');
        mostrarMenuColeccion(nombreColeccion);
    }
}

function añadirCarrera(nombreColeccion) {
    rl.question('Introduzca la carrera nueva: ', (carrera) => {
        rl.question('Introduzca la descripción de la carrera: ', (descripcion) => {
            colecciones[nombreColeccion].push({ clave: carrera, descripcion });
            console.log();
            console.log(`Carrera añadida: ${carrera}`);
            mostrarMenuColeccion(nombreColeccion);
        });
    });
}

function cambiarOrden(nombreColeccion) {
    const coleccionActual = colecciones[nombreColeccion];
    if (coleccionActual.length > 1) {
        const ultimaCarrera = coleccionActual.pop();
        coleccionActual.unshift(ultimaCarrera);
        console.log('Orden cambiado correctamente.');
    } else {
        console.log('No se puede cambiar el orden.');
    }
    mostrarMenuColeccion(nombreColeccion);
}

function EliminarPrimeraCarrera(nombreColeccion) {
    const coleccionActual = colecciones[nombreColeccion];
    if (coleccionActual.length > 0) {
        const carreraEliminada = coleccionActual.shift();
        console.log(`Carrera eliminada: ${carreraEliminada.clave}`);
    } else {
        console.log('No hay carreras para eliminar.');
    }
    mostrarMenuColeccion(nombreColeccion);
}

function EliminarUltimaCarrera(nombreColeccion){
    const coleccionActual = colecciones[nombreColeccion];
    if (coleccionActual.length > 0) {
        const carreraEliminada = coleccionActual.pop();
        console.log(`Carrera eliminada: ${carreraEliminada.clave}`);
    } else {
        console.log('No hay carreras para eliminar.');
    }
    mostrarMenuColeccion(nombreColeccion);
}

function lista_datos(nombreColeccion){
    const coleccionActual = colecciones[nombreColeccion];
    let datos = [];
    let claves = Object.keys(coleccionActual);

    for(let i = 0; i < claves.length; i++){
        let data = [claves[i], coleccionActual[claves[i]]];
        datos.push(data);
    }

    console.table(datos);
}

function main() {
    let menu = new bienvenido();
    menu.bi();
}

main();