package models;

public class Resultado {
    private String operacion;
    private int valor;

    public Resultado(String operacion, int valor) {
        this.operacion = operacion;
        this.valor = valor;
    }

    public String getOperacion() {
        return operacion;
    }

    public int getValor() {
        return valor;
    }
}