package controllers;

import services.EstructurasService;
import models.Estructuras;
import java.util.List;

public class EstructurasController {
    private EstructurasService servicio;

    public EstructurasController() {
        this.servicio = new EstructurasService();
    }

    public void agregarEstructura(int numero) {
        Estructuras estructura = new Estructuras(numero);
        servicio.agregarEstructura(estructura);
        System.out.println("Estructura agregada: " + estructura);
    }

    public void mostrarTodasEstructuras() {
        List<Estructuras> estructuras = servicio.obtenerTodas();
        System.out.println("Lista de estructuras:");
        for (Estructuras estructura : estructuras) {
            System.out.println(estructura);
        }
    }

    public void mostrarEstructuraPorPosicion(int posicion) {
        try {
            Estructuras estructura = servicio.obtenerPorPosicion(posicion);
            System.out.println("Estructura encontrada: " + estructura);
        } catch (IndexOutOfBoundsException e) {
            System.out.println("Posición inválida.");
        }
    }

    public void determinarEtapaVida(int edad, String metodo) {
        String etapa;
        switch (metodo.toLowerCase()) {
            case "if":
                etapa = servicio.determinarEtapaVidaConIf(edad);
                break;
            case "switch":
                etapa = servicio.determinarEtapaVidaConSwitch(edad);
                break;
            case "while":
                etapa = servicio.determinarEtapaVidaConWhile(edad);
                break;
            default:
                etapa = "Método desconocido.";
                break;
        }
        System.out.println("Etapa de vida: " + etapa);
    }

    public void encontrarEdadMaxima() {
        int max = servicio.encontrarEdadMaxima();
        System.out.println("Edad máxima: " + max);
    }
}
