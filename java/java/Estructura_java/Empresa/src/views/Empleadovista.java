package views;

import models.Empleados;
import services.EmpleadosServicio;
import java.util.Scanner;
import java.util.List;


public class Empleadovista {
    private EmpleadosServicio empleadosServicio;
    private Scanner scanner;
    private String Saludo = "Bienvenido al sistema de empleados";
    private String Despedida = "Gracias por usar el sistema de empleados";

    public Empleadovista(EmpleadosServicio empleadosServicio) {
        this.empleadosServicio = empleadosServicio;
        this.scanner = new Scanner(System.in);
    }

    public void mostrarDespedida() {
        System.out.println(Despedida);
    }

    public void mostrarSaludo() {
        System.out.println(Saludo);
    }
    
    public void mostrarMenu() {
        mostrarSaludo();
        System.out.println("1. Agregar Empleado");
        System.out.println("2. Mostrar Empleados");
        System.out.println("3. Salir");

        int op = Integer.parseInt(scanner.nextLine());

        switch (op) {
            case 1:
                agregarEmpleado();
                break;
            case 2:
                mostrarEmpleados();
                break;
            case 3:
                System.out.println("Saliendo del programa...");
                break;
            default:
                System.out.println("Opción inválida");
        }
    }

    public void agregarEmpleado() {
        System.out.println("Ingrese el nombre del empleado: ");
        String nombre = scanner.nextLine();
        System.out.println("Ingrese el apellido del empleado: ");
        String apellido = scanner.nextLine();
        System.out.println("Ingrese el email del empleado: ");
        String email = scanner.nextLine();
        System.out.println("Ingrese el telefono del empleado: ");
        String telefono = scanner.nextLine();
        System.out.println("Ingrese la direccion del empleado: ");
        String direccion = scanner.nextLine();
        System.out.println("Ingrese la ciudad del empleado: ");
        String ciudad = scanner.nextLine();
        System.out.println("Ingrese el estado del empleado: ");
        String estado = scanner.nextLine();

        Empleados empleado = new Empleados(nombre, apellido, email, telefono, direccion, ciudad, estado);
        empleadosServicio.agregarEmpleado(empleado);
        System.out.println("Empleado agregado correctamente");
        mostrarMenu();
    }

    public void mostrarEmpleados() {
        List<Empleados> empleados = empleadosServicio.getEmpleados();
        for (Empleados empleado : empleados) {
            System.out.println(empleado);
            System.out.println("--------------------------------");
        }
        mostrarDespedida();
    }       
    
    
    
}
