package com.pruebas.TarjetaPersonal;

import java.util.Scanner;


public class Tarjeta {
    public String nombre,celular,institucion,correo;
    public Scanner scanner;

    public Tarjeta(){
        scanner = new Scanner(System.in);
        System.err.println("Bienvendo al generador de tarjetas de presentacion");
        IngresarDatos();

    }

    public void IngresarDatos(){
        System.out.println("Ingrese su titulo profesional: ");
        nombre = scanner.nextLine();

        System.out.println("Ingrese su numero de celular: ");
        celular = scanner.nextLine();

        System.out.println("Ingrese su institucion: ");
        institucion = scanner.nextLine();

        System.out.println("Ingrese su correo: ");
        correo = scanner.nextLine();

        MostrarTarjeta();   
    }

    public void MostrarTarjeta() {
        System.out.println("********************************");
        System.out.println("*      TARJETA PERSONAL        *");
        System.out.println("********************************");
        System.out.println("*                              *");
        System.out.println("*      " + nombre + "          *");
        System.out.println("*                              *");
        System.out.println("* Celular: " + celular + "     *");
        System.out.println("* Institución: " + institucion + " *");
        System.out.println("* Correo: " + correo + "       *");
        System.out.println("*                              *");
        System.out.println("********************************");
    }

}
