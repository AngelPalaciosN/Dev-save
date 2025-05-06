package Vista;

import Modelo.Cuenta;

import java.util.Scanner;

public class VistaCajero {
    private Scanner sc = new Scanner(System.in);
    private Cuenta cuenta;

    public int mostrarM(int numeroCuentaActual) {
        System.out.println("Bienvenido al cajero automático");
        System.out.println("1. Consignación");
        System.out.println("2. Retiro");
        System.out.println("3. Transferencia");
        System.out.println("4. Cambio de clave");
        System.out.println("5. Crear nueva cuenta ");
        System.out.println("6. Mostrar Saldo");
        System.out.println("7. Cambiar cuenta actual");
        System.out.println("8. Salir");
        System.out.print("Seleccione una opción: ");
        System.out.println("Cuenta actual: " + numeroCuentaActual);
        return sc.nextInt();
    }

    public int motrarMretiro() {
        System.out.println("\n--- Opciones de Retiro ---");
        System.out.println("1. $1.000");
        System.out.println("2. $3.000");
        System.out.println("3. $10.000");
        System.out.println("4. Cancelar");
        System.out.print("Seleccione una opción: ");
        return sc.nextInt();
    }

    public double pedirM(String mensaje) {
        System.out.println(mensaje);
        return sc.nextDouble();
    }

    public int pedirNumeroCuenta(String mensaje) {
        System.out.println(mensaje);
        return sc.nextInt();
    }

    public int pedirClave(String mensaje) {
        System.out.println(mensaje);
        return sc.nextInt();
    }

    public void mostrarMen(String mensaje) {
        System.out.println(mensaje);
    }

}
