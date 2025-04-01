package services;

import models.Estructuras;
import java.util.ArrayList;
import java.util.List;

public class EstructurasService {
    private List<Estructuras> listaEstructuras;

    public EstructurasService() {
        this.listaEstructuras = new ArrayList<>();
    }
    
    public void agregarEstructura(Estructuras estructura) {
        listaEstructuras.add(estructura);
    }
    
    public List<Estructuras> obtenerTodas() {
        return listaEstructuras;
    }
    
    public Estructuras obtenerPorPosicion(int posicion) {
        return listaEstructuras.get(posicion);
    }
    
    public String determinarEtapaVidaConIf(int edad) {
        String etapa;
        
        if (edad < 0) {
            etapa = "Edad inválida";
        } else if (edad <= 5) {
            etapa = "Primera infancia";
        } else if (edad <= 11) {
            etapa = "Infancia";
        } else if (edad <= 18) {
            etapa = "Adolescencia";
        } else if (edad <= 30) {
            etapa = "Juventud";
        } else if (edad <= 60) {
            etapa = "Adultez";
        } else {
            etapa = "Vejez";
        }
        
        return etapa + ", Metodo IF";
    }
    

    public String determinarEtapaVidaConSwitch(int edad) {
        String etapa;
        
        if (edad < 0) {
            return "Edad inválida";
        }
        

        int categoria;
        if (edad <= 5) categoria = 1;
        else if (edad <= 11) categoria = 2;
        else if (edad <= 18) categoria = 3;
        else if (edad <= 30) categoria = 4;
        else if (edad <= 60) categoria = 5;
        else categoria = 6;
        
        switch (categoria) {
            case 1:
                etapa = "Primera infancia";
                break;
            case 2:
                etapa = "Infancia";
                break;
            case 3:
                etapa = "Adolescencia";
                break;
            case 4:
                etapa = "Juventud";
                break;
            case 5:
                etapa = "Adultez";
                break;
            case 6:
                etapa = "Vejez";
                break;
            default:
                etapa = "Edad inválida";
                break;
        }
        
        return etapa + ", Metodo Switch";
    }
    
    public String determinarEtapaVidaConWhile(int edad) {
        if (edad < 0) {
            return "Edad inválida";
        }
        
        String etapa = "";
        int i = 0;
        
        int[] limites = {5, 11, 18, 30, 60, Integer.MAX_VALUE};
        String[] etapas = {"Primera infancia", "Infancia", "Adolescencia", 
                          "Juventud", "Adultez", "Vejez"};
        
        while (i < limites.length) {
            if (edad <= limites[i]) {
                etapa = etapas[i];
                break;
            }
            i++;
        }
        
        return etapa + ", Metodo while";
    }
    
    public int encontrarEdadMaxima() {
        if (listaEstructuras.isEmpty()) {
            return 0;
        }
        
        int max = listaEstructuras.get(0).getNumero();
        for (Estructuras estructura : listaEstructuras) {
            if (estructura.getNumero() > max) {
                max = estructura.getNumero();
            }
        }
        
        return max;
    }
}