import views.CalculadoraViews;
import controllers.CalculadoraController;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println("Bienvenido a la calculadora");

        Scanner scanner = new Scanner(System.in);
        try {
            CalculadoraController controller = new CalculadoraController();
            CalculadoraViews views = new CalculadoraViews(scanner, controller);
            views.mostrarMenu();

        } catch (Exception e) {
            System.out.println("Ha ocurrido un error inesperado: " + e.getMessage());
        } finally {
            scanner.close();
        }
        System.out.println("Gracias por usar el sistema. ¡Hasta pronto!");
    }
}
