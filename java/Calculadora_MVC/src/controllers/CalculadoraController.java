package controllers;

import services.CalculadoraService;
import models.Resultado;
import java.util.List;

public class CalculadoraController {
    private CalculadoraService service;

    // Constructor
    public CalculadoraController() {
        this.service = new CalculadoraService();
    }

    // Método para agregar un número a la lista temporal
    public void agregarNumero(int numero) {
        service.agregarNumero(numero);
    }

    // Método para calcular la suma y guardar en el historial
    public void calcularYGuardarSuma() {
        service.realizarSuma();
    }

    public void calcularYGuardarResta(){
        service.realizarResta();
    }

    
    public void calcularYGuardarDivision(){
        service.realizarDivision();
    }

    
    public void calcularYGuardarMulti(){
        service.realizarMultiplicacion();
    }

    // Método para obtener y mostrar el historial de resultados
    public void mostrarHistorial() {
        List<Resultado> resultados = service.obtenerResultados();
        if (resultados.isEmpty()) {
            System.out.println("No hay resultados en el historial.");
        } else {
            System.out.println("\n--- HISTORIAL DE RESULTADOS ---");
            for (Resultado resultado : resultados) {
                System.out.println(resultado.getOperacion() + ": " + resultado.getValor());
            }
        }
    }
}
