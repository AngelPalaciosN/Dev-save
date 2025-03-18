package com.pruebas.calculadora.operaciones;

import java.util.Scanner;

public class Multiplicacion{
    public int num,can,resultado;
    public Scanner scanner;

    public Multiplicacion(){
        scanner = new Scanner(System.in);
        System.out.print("Cuántos números quieres multiplicar? Elija solo de parejas de 2");
        can = scanner.nextInt();

        for (int i= 0; i< can; i++) {
            for (int j = 0; i < can; i++){
                System.out.print("Ingresa el número " + (i+1) + ": ");
                
            }
            System.out.print("Ingresa el número " + (i+1) + ": ");
            num = scanner.nextInt();
            resultado -= num;
        }

        System.out.println("La suma total es: " + resultado);
    }
}
