package com.pruebas.holamundo;

import java.util.Scanner;
import java.util.Random;

public class Saludo {
    public Scanner scanner;
    public String bienvenido;
    private int num;

    public Saludo(){
        scanner = new Scanner(System.in);
        System.out.println("Ingresa tu nombre: ");
        bienvenido = scanner.nextLine();
    }

    public void bienvenida(){
        System.out.println();
        System.out.println("Bienvenido, " + bienvenido);
    }

    public void NumeroSuerte(){
        Random random = new Random();
        num = random.nextInt(100) + 1;
        System.out.println("Tu número de la suerte es: " + num);
    }
    
}
