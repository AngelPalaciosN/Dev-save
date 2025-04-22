
package services;

import models.Nombres;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class NombresService {
    private final List<Nombres> lista;

    public NombresService() {
        lista = new ArrayList<>();
    }

    public void listar(String nombre) {
        while (Objects.equals(nombre, "0")) {
            lista.add(new Nombres(nombre));
            System.out.println(lista);
        }

    }

    public List<Nombres> getLista() {
        return lista;
    }
}