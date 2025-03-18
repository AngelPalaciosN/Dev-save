package com.pruebas.calculadora.operaciones;

import java.util.Scanner;

public class Suma {
    public int num,can,resultado;
    public Scanner scanner;

    public Suma(){
        scanner = new Scanner(System.in);
        System.out.print("Cuántos números quieres sumar? ");
        can = scanner.nextInt();

        for (int i= 0; i< can; i++) {
            System.out.print("Ingresa el número " + (i+1) + ": ");
            num = scanner.nextInt();
            resultado += num;
        }

        System.out.println("La suma total es: " + resultado);
    }
}
