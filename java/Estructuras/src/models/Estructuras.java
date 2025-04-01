package models;

public class Estructuras {

    private int numero;

    public Estructuras(){
    }

    public Estructuras(int numero){
        this.numero = numero;
    }


    public int getNumero() {
        return numero;
    }
    
    public void setNumero(int numero) {
        this.numero = numero;
    }

    @Override
    public String toString() {
        return "Estructuras{" +
               "numero=" + numero +
               '}';
    }
    

    }
