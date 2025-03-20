import services.EmpleadosServicio;
import views.Empleadovista;

public class Main {
    public static void main(String[] args) throws Exception {
        EmpleadosServicio empleadosServicio = new EmpleadosServicio();
        Empleadovista empleadovista = new Empleadovista(empleadosServicio);
        empleadovista.mostrarMenu();
    }
}
