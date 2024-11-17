"use strict";
// Librerías (Imports)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Clases

class Publicacion {
    _titulo = '';
    _autor = '';
    _publicacion = '';
    
    constructor(titulo = '', autor = '', publicacion = '') {
        this._titulo = titulo;
        this._autor = autor;
        this._publicacion = publicacion;
    }

    seleccion(guardar) {
        console.log(`Elige un tipo de publicación: `);
        console.log(`1. Libro`);
        console.log(`2. Revista`);
        console.log(`3. Artículo`);
        rl.question("\nIngrese una opción: ", (opcion) => {
            let publicacion;
            if (opcion === '1') {
                publicacion = new Libro();
            } else if (opcion === '2') {
                publicacion = new Revista();
            } else if (opcion === '3') {
                publicacion = new Articulo();
            } else {
                console.log('Opción no válida');
                rl.close();
                return;
            }
            guardar(publicacion);
        });
    }

    ingresar(guardar) {
        rl.question('Ingrese el título de la publicación: ', (titulo) => {
            this._titulo = titulo;
            rl.question('Ingrese el autor de la publicación: ', (autor) => {
                this._autor = autor;
                rl.question('Ingrese la publicación (ej. 2020, 2021): ', (publicacion) => {
                    this._publicacion = publicacion;
                    guardar();
                });
            });
        });
    }

    mostrarInfo() {
        return `\nTítulo: ${this._titulo}\nAutor: ${this._autor}\nPublicación: ${this._publicacion}`;
    }
}

class Libro extends Publicacion {
    _numeroPaginas = '';

    constructor(titulo = '', autor = '', publicacion = '', numeroPaginas = '') {
        super(titulo, autor, publicacion);
        this._numeroPaginas = numeroPaginas;
    }

    ingresarPublicacion(guardar) {
        rl.question('Ingrese el número de páginas del libro: ', (numeroPaginas) => {
            this._numeroPaginas = numeroPaginas;
            guardar();
        });
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}\nNúmero de Páginas: ${this._numeroPaginas}`;
    }
}

class Revista extends Publicacion {
    _frecuencia = '';

    constructor(titulo = '', autor = '', publicacion = '', frecuencia = '') {
        super(titulo, autor, publicacion);
        this._frecuencia = frecuencia;
    }

    ingresarPublicacion(guardar) {
        rl.question('Ingrese la frecuencia de publicación de la revista (veces al año): ', (frecuencia) => {
            this._frecuencia = frecuencia;
            guardar();
        });
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}\nFrecuencia de Publicación: ${this._frecuencia} veces al año`;
    }
}

class Articulo extends Publicacion {
    _url = '';

    constructor(titulo = '', autor = '', publicacion = '', url = '') {
        super(titulo, autor, publicacion);
        this._url = url;
    }

    ingresarPublicacion(guardar) {
        rl.question('Ingrese la URL donde se puede encontrar el artículo: ', (url) => {
            this._url = url;
            guardar();
        });
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}\nURL: ${this._url}`;
    }
}

// Método principal
function main() {
    const publicacion = new Publicacion();
    publicacion.seleccion((publicacionGuardada) => {
        publicacionGuardada.ingresar(() => {
            publicacionGuardada.ingresarPublicacion(() => {
                console.log(publicacionGuardada.mostrarInfo());
                rl.close();
            });
        });
    });
}

main();
