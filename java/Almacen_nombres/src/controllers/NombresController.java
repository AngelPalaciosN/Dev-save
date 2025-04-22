package controllers;

import services.NombresService;

public class NombresController {
    private NombresService nombresService;

    public NombresController(NombresService nombresService) {
        this.nombresService = nombresService;
    }

    public void mostrarLista() {
        System.out.println(nombresService.getLista());
    }
}

