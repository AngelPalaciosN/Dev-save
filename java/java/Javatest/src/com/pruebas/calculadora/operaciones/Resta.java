package com.pruebas.calculadora.operaciones;

import java.util.Scanner;

public class Resta{
    public int num,can,resultado;
    public Scanner scanner;

    public Resta(){
        scanner = new Scanner(System.in);
        System.out.print("Cuántos números quieres restar? ");
        can = scanner.nextInt();

        System.out.println("Ingresa el primer numero: ");
        resultado = scanner.nextInt();

        for (int i= 0; i< can; i++) {
            System.out.print("Ingresa el número " + (i+1) + ": ");
            num = scanner.nextInt();
            resultado -= num;
        }

        System.out.println("La suma total es: " + resultado);
    }
}
