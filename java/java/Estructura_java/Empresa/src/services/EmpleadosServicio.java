package services;

import java.util.ArrayList;
import java.util.List;

import models.Empleados;

public class EmpleadosServicio {
    private List<Empleados> empleados = new ArrayList<>();

    public void agregarEmpleado(Empleados empleado) {
        this.empleados.add(empleado);
    }

    public List<Empleados> getEmpleados() {
        return this.empleados;
    }
    
}
