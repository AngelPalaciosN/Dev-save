package services;

import models.Calculadora;
import models.Resultado;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class CalculadoraService {
    private List<Calculadora> listaTemporal; 
    private List<Resultado> resultados;    
    private Scanner scanner;

    public CalculadoraService() {
        this.listaTemporal = new ArrayList<>();
        this.resultados = new ArrayList<>();
        this.scanner = new Scanner(System.in);
    }

    public void agregarNumero(int numero) {
        listaTemporal.add(new Calculadora(numero));
        System.out.println("Número " + numero + " agregado a la lista temporal.");
    }

    public void calcularYGuardarSuma() {
        if (listaTemporal.isEmpty()) {
            System.out.println("La lista temporal está vacía. No hay nada que sumar.");
            return;
        }
        

        int suma = 0;
        for (Calculadora cal : listaTemporal) {
            suma += cal.getNumero();
        }

        resultados.add(new Resultado("Suma", suma));
        listaTemporal.clear();  
        System.out.println("Suma calculada: " + suma + " y guardada en el historial.");
    }

    public void calcularYGuardarResta() {
        if (listaTemporal.isEmpty()) {
            System.out.println("La lista temporal está vacía. No hay nada que restar.");
            return;
        }

        int resta = listaTemporal.get(0).getNumero(); 
        for (int i = 1; i < listaTemporal.size(); i++) {
            resta -= listaTemporal.get(i).getNumero();
        }

        resultados.add(new Resultado("Resta", resta));
        listaTemporal.clear(); 
        System.out.println("Resta calculada: " + resta + " y guardada en el historial.");
    }


    public void calcularYGuardarMulti() {
        if (listaTemporal.isEmpty()) {
            System.out.println("La lista temporal está vacía. No hay nada que multiplicar.");
            return;
        }

        int multiplicacion = 1;
        for (Calculadora cal : listaTemporal) {
            multiplicacion *= cal.getNumero();
        }

        resultados.add(new Resultado("Multiplicación", multiplicacion));
        listaTemporal.clear();
        System.out.println("Multiplicación calculada: " + multiplicacion + " y guardada en el historial.");
    }

    public void calcularYGuardarDivision() {
        if (listaTemporal.isEmpty()) {
            System.out.println("La lista temporal está vacía. No hay nada que dividir.");
            return;
        }

        double division = listaTemporal.get(0).getNumero(); 
        for (int i = 1; i < listaTemporal.size(); i++) {
            int divisor = listaTemporal.get(i).getNumero();
            if (divisor == 0) {
                System.out.println("No se puede dividir por cero. Operación cancelada.");
                return;
            }
            division /= divisor;
        }

        resultados.add(new Resultado("División", (int) division));
        listaTemporal.clear();  
        System.out.println("División calculada: " + division + " y guardada en el historial.");
    }


    public List<Resultado> obtenerResultados() {
        return resultados;
    }

    public void realizarSuma() {
        System.out.println("Ingrese números para sumar (escriba '0' para terminar):");
        while (true) {
            String input = scanner.nextLine();
            if (input.equals("0")) {
                break; 
            }
            try {
                int num = Integer.parseInt(input);
                agregarNumero(num);
            } catch (NumberFormatException e) {
                System.out.println("Por favor, ingrese un número válido o '0' para terminar.");
            }
        }
        calcularYGuardarSuma();
    }

    public void realizarResta() {
        System.out.println("Ingrese números para restar (escriba '0' para terminar):");
        while (true) {
            String input = scanner.nextLine();
            if (input.equals("0")) {
                break; 
            }
            try {
                int num = Integer.parseInt(input);
                agregarNumero(num); 
            } catch (NumberFormatException e) {
                System.out.println("Por favor, ingrese un número válido o '0' para terminar.");
            }
        }
        calcularYGuardarResta();
    }

    public void realizarMultiplicacion() {
        System.out.println("Ingrese números para multiplicar (escriba '0' para terminar):");
        while (true) {
            String input = scanner.nextLine();
            if (input.equals("0")) {
                break;
            }
            try {
                int num = Integer.parseInt(input);
                agregarNumero(num); 
            } catch (NumberFormatException e) {
                System.out.println("Por favor, ingrese un número válido o '0' para terminar.");
            }
        }
        calcularYGuardarMulti(); 
    }

    public void realizarDivision() {
        System.out.println("Ingrese números para dividir (escriba '0' para terminar):");
        while (true) {
            String input = scanner.nextLine();
            if (input.equals("0")) {
                break; 
            }
            try {
                int num = Integer.parseInt(input);
                agregarNumero(num); 
            } catch (NumberFormatException e) {
                System.out.println("Por favor, ingrese un número válido o '0' para terminar.");
            }
        }
        calcularYGuardarDivision(); 
    }
}
