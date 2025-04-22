package Models;

import java.util.Scanner;

public class Metodo {
    public static int num1;
    public static int num2;
    public static int total;

    // Constructor vacío para instanciar sin valores iniciales
    public Metodo() {}

    // Método público para llamar a sumar1
    public static void ejecutarSumar1() {
        sumar1();
    }

    // Método público para llamar a sumar2
    public static void ejecutarResta(int num1, int num2) {
        Restar(num1, num2);
    }

    // Método público para llamar a sumar3
    public static int ejecutarSumar3() {
        return sumar3();
    }

    // Método público para llamar a sumar4
    public static int ejecutarSumar4(int num1, int num2) {
        return sumar4(num1, num2);
    }

    // Métodos privados (no cambian)
    private static void sumar1() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Ingrese el primer número: ");
        num1 = sc.nextInt();
        System.out.print("Ingrese el segundo número: ");
        num2 = sc.nextInt();

        int total = a + b;
        System.out.println("La suma de los números es (método 1): " + total);
    }


    /*
        Se predefine cada cada numero que se usara en la operacion y se evalua

     */
    private static void Restar(int num1, int num2) {
        int total = num1 - num2;
        System.out.println("La suma de los números es (método 2): " + total);
    }

    private static int sumar3() {
        num1 = 40;
        num2 = 20;
        int total = num1 + num2;
        System.out.println("La suma de los números es (método 3): " + total);
        return total;
    }

    private static int sumar4(int num1, int num2) {
        int total = num1 + num2;
        return total;
    }
}
