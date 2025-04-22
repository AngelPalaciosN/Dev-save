import models.Nombres;
import services.NombresService;
import views.Nombresviews;
import controllers.NombresController;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            NombresService Service = new NombresService();
            NombresController controller = new NombresController(Service);
            Nombresviews views = new Nombresviews(sc, controller);
            views.solicitarNombre();
            views.mostrarNombres();
        } catch (Exception e) {
            System.out.println("Ha ocurrido un error inesperado: " + e.getMessage());
        }
        System.out.println("Gracias por usar el sistema. ¡Hasta pronto!");
    }
}