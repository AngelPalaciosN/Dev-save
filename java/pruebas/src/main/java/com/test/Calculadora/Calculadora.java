package com.test.Calculadora;

import java.util.Scanner;

public class Calculadora {
    public Scanner scanner;
    public int suma,resta,multi,divi;
    private int num;
    private int can;

    public Calculadora(){
        scanner = new Scanner(System.in);
        System.out.println("Ingresa una cantidad de numeros para sumar:");
        can = scanner.nextInt();
    }

    public void suma(){
        suma = 0;
        System.out.println();
        for (int i = 0; i < can; i++) {
            System.out.println("Ingresa un numero:");
            num = scanner.nextInt();
            suma += num;
        }
        System.out.println();
        System.out.println("La suma total es: " + suma);
    }


    public void resta(){
        resta = 0;
        System.out.println();
        for (int i = 0; i < can; i++) {
            System.out.println("Ingresa un numero:");
            num = scanner.nextInt();
            resta -= num;
        }
        System.out.println();
        System.out.println("La resta total es: " + resta);
    }
}
