package views;

import java.util.Scanner;

public class Nombresviews {
    private Scanner sc;
    private controllers.NombresController nombresController;

    public Nombresviews(Scanner sc, controllers.NombresController nombresController) {
        this.sc = sc;
        this.nombresController = nombresController;
    }

    public void solicitarNombre() {
        System.out.println("Ingrese un nombre:");
        String nombre = sc.nextLine(); // Capturar entrada del usuario
    }

    public void mostrarNombres() {
        nombresController.mostrarLista();
    }
}
