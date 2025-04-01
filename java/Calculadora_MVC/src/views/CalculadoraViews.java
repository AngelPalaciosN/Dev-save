package views;

import java.util.Scanner;
import controllers.CalculadoraController;

public class CalculadoraViews {
    private Scanner scanner;
    private CalculadoraController controller;

    public CalculadoraViews(){
    }

    public CalculadoraViews(Scanner scanner, CalculadoraController controller){
        this.scanner = scanner;
        this.controller = controller;
    }

    public void mostrarMenu(){
        int op;

        do{
            System.out.println("\n===== MENÚ CALCULADORA =====");
            System.out.println("1. Elija una operacion");
            System.out.println("2. Mostrar resultado de operacione realizadas");
            System.out.println("0. Salir");

            op = scanner.nextInt();
            scanner.nextLine();

            switch (op) {
                case 1:
                    ElegirOp();
                    break;

                case 2:
                    MostarOp();
                    break;
            
                default:
                    break;
            }
        } while (op != 0);
    }


    private void ElegirOp(){
        System.out.println("Seleccione la operación:");
        System.out.println("1. Sumar");
        System.out.println("2. Restar");
        System.out.println("3. Multiplicar");
        System.out.println("4. Dividir");
        int operacion = scanner.nextInt();
        scanner.nextLine();

        switch (operacion) {
            case 1:
                controller.calcularYGuardarSuma();
                break;
            case 2:
                controller.calcularYGuardarResta();
                break;
            case 3:
                controller.calcularYGuardarMulti();
                break;
            case 4:
                controller.calcularYGuardarDivision();
                break;
            default:
                System.out.println("Operación no válida.");
                break;
        }
    }


    private void MostarOp(){
        controller.mostrarHistorial();
    }
    
}
