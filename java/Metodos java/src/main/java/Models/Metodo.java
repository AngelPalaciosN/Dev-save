package Models;

import java.util.Scanner;

public class Metodo {

    // Constructor vacío para instanciar sin valores iniciales
    public Metodo() {}

    // Método público para llamar a sumar1
    public static void ejecutarSumar1() {
        sumar1();
    }

    // Método público para llamar a sumar2
    public static void ejecutarSumar2(int num1, int num2) {
        sumar2(num1, num2);
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
        int a = sc.nextInt();
        System.out.print("Ingrese el segundo número: ");
        int b = sc.nextInt();

        int total = a + b;
        System.out.println("La suma de los números es (método 1): " + total);
    }

    private static void sumar2(int num1, int num2) {
        int total = num1 + num2;
        System.out.println("La suma de los números es (método 2): " + total);
    }

    private static int sumar3() {
        int num1 = 88;
        int num2 = 2;
        int total = num1 + num2;
        System.out.println("La suma de los números es (método 3): " + total);
        return total;
    }

    private static int sumar4(int num1, int num2) {
        int total = num1 + num2;
        return total;
    }
}
