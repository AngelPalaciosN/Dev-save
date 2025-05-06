package Modelo;

public class Cuenta {
    private int numero;
    private int clave;
    private double saldo;

    public Cuenta(int numero, int clave, double saldo) {
        this.numero = numero;
        this.clave = clave;
        this.saldo = saldo;
    }

    public int getNumero() {
        return numero;
    }

    public int getClave() {
        return clave;
    }

    public double getSaldo() {
        return saldo;
    }

    public void consignar(double monto) {
        if (monto > 0) {
            saldo += monto;
        }
    }

    public boolean retirar(double monto) {
        if (monto > 0 && saldo >= monto) {
            saldo -= monto;
            return true;
        }
        return false;
    }

    public boolean transferir(Cuenta destino, double monto) {
        if (retirar(monto)) {
            destino.consignar(monto);
            return true;
        }
        return false;
    }

    public void cambiarClave(int nuevaClave) {
        this.clave = nuevaClave;
    }

    @Override
    public String toString() {
        return "Cuenta Nº: " + numero + ", Saldo: $" + saldo;
    }

}
