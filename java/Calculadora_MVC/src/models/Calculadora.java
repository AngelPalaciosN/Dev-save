package models;

public class Calculadora {
    private int numero;

    public Calculadora(){
    }

    public Calculadora(int numero){
        this.numero = numero;
    }

    public int getNumero(){
        return numero;
    }

    public void setNumero(int numero){
        this.numero = numero;
   }

   @Override
   public String toString(){
        return "Calculadora{" +
               "numero=" + numero +
               '}';
   }
}
