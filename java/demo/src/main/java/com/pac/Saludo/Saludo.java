package com.pac.Saludo;

public class Saludo {
    private String saludo = "Hola mundo";

    public Saludo(){}

    public void saludar() {
        System.out.println(saludo);
    }

    public String getSaludo() {
        return saludo;
    }



}