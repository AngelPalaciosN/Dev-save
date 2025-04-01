import views.EstructurasViews;
import controllers.EstructurasController;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Bienvenido al sistema de gestión de estructuras.\n");

        try {
            Scanner scanner = new Scanner(System.in);
            EstructurasController controller = new EstructurasController();
            EstructurasViews estructurasViews = new EstructurasViews(scanner, controller);  
            estructurasViews.mostrarMenu();

            scanner.close();
        } catch (Exception e) {
            System.out.println("Ha ocurrido un error inesperado: " + e.getMessage());
        }

        System.out.println("Gracias por usar el sistema. ¡Hasta pronto!");
    }
}
