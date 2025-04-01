package views;

import java.util.Scanner;
import controllers.EstructurasController;

public class EstructurasViews {
    private Scanner scanner;
    private EstructurasController controller;

    public EstructurasViews(Scanner scanner, EstructurasController controller) {
        this.scanner = scanner;
        this.controller = controller;
    }

    public void mostrarMenu() {
        int op;
        do {
            System.out.println("\n===== MENÚ ESTRUCTURAS =====");
            System.out.println("1. Ingresar una nueva edad");
            System.out.println("2. Mostrar todas las edades");
            System.out.println("3. Analizar datos por posición");
            System.out.println("4. Encontrar edad máxima");
            System.out.println("0. Salir");
            System.out.print("Seleccione una opción: ");

            op = scanner.nextInt();
            scanner.nextLine();

            switch (op) {
                case 1:
                    ingresarEdad();
                    break;
                case 2:
                    mostrarEdades();
                    break;
                case 3:
                    elegirMetodo();
                    break;
                case 4:
                    encontrarEdadMaxima();
                    break;
                case 0:
                    System.out.println("Saliendo del sistema...");
                    break;
                default:
                    System.out.println("Opción inválida. Intente de nuevo.");
                    break;
            }
        } while (op != 0);
    }

    private void ingresarEdad() {
        System.out.print("Ingrese la edad: ");
        int edad = scanner.nextInt();
        scanner.nextLine();
        controller.agregarEstructura(edad);
    }

    private void mostrarEdades() {
        controller.mostrarTodasEstructuras();
    }

    private void elegirMetodo() {
        System.out.print("Ingrese la posición de la edad a analizar: ");
        int posicion = scanner.nextInt();
        scanner.nextLine();
        System.out.println("Seleccione el método (if/switch/while): ");
        String metodo = scanner.nextLine();
        controller.determinarEtapaVida(posicion, metodo);
    }

    private void encontrarEdadMaxima() {
        controller.encontrarEdadMaxima();
    }
}
