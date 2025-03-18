package com.pruebas.calculadora;

import java.util.Scanner;

import com.pruebas.calculadora.operaciones.*;


public class Calculadora {
    public Scanner scanner;
    public int suma,resta,multiplicacion,division;
    public int op;
    

    public Calculadora(){
        scanner = new Scanner(System.in);
        System.out.println("Bienvendo, elige una opcion");
        menu();
        seleccion();
    }

    public void menu(){
        System.out.println("Elija un operacion: ");
        System.out.println("1. Suma");
        System.out.println("2. Resta");
        System.out.println("3. Multiplicación");
        System.out.println("4. División");
        System.out.println("5. Salir");

        System.out.println("Ingrese una opcion");
        op = scanner.nextInt();   
    }

    public void seleccion(){
        switch (op) {
            case 1:
                Suma suma = new Suma();
                break;
    

            case 2:
                Resta resta = new Resta();
            break;

            case 3: 
                Multiplicacion multi = new Multiplicacion();

            default:


        }
    }
    
}
