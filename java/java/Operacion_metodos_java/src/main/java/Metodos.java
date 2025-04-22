/*
    @autor: ANGEL DAVID PALACIOS
    @FECHA 21/04/2025
    @Description: definicion y utilizacion de metodos
*/


import Models.Metodo;

public class Metodos {
    public static void main(String[] args) {
        // Llamar al método sumar1
        Metodo.ejecutarSumar1();

        // Llamar al método sumar2 con parámetros
        Metodo.ejecutarResta(45, 22);

        // Llamar al método sumar3 y capturar su valor de retorno
        int resultadoSumar3 = Metodo.ejecutarSumar3();
        System.out.println("Resultado retornado por sumar3: " + resultadoSumar3);

        // Llamar al método sumar4 y capturar su valor de retorno
        int resultadoSumar4 = Metodo.ejecutarSumar4(12, 34);
        System.out.println("Resultado retornado por sumar4: " + resultadoSumar4);
    }


}// fin de la clase
