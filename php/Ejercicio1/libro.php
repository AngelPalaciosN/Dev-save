<?php
// Librerias (Imports)
class Persona {
    private $titulo;
    private $autor;
    private $numero_p;

    public function __construct($titulo, $autor, $numero_p) {
        $this->titulo = $titulo;
        $this->autor = $autor;
        $this->numero_p = $numero_p;
    }

    public function saludo() {
        echo "Bienvenido, por favor ingresa tus datos...\n";
        $this->ingresar();
    }

    public function ingresar() {
        echo "Datos ingresados: Título - {$this->titulo}, Autor - {$this->autor}, Número de páginas - {$this->numero_p}\n";
    }
}

$libro = new Persona("Cien años de soledad", "0", 863);
$libro->saludo();
?>
