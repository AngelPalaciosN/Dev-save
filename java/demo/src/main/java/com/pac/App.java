package com.pac;

import com.pac.Empleados.*;
import com.pac.Saludo.*;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class App extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {
        // Cargar la vista FXML
        Parent root = FXMLLoader.load(getClass().getResource("/fxml/GUIEmpleado.fxml"));
        primaryStage.setTitle("Mi Aplicación");
        primaryStage.setScene(new Scene(root));
        primaryStage.show();
        
        // Si deseas mantener el saludo, puedes llamarlo aquí
        Saludo saludo = new Saludo();
        saludo.saludar();

        // Si deseas ejecutar un ejercicio, también puedes hacerlo aquí
        Ejercicio1 ejercicio1 = new Ejercicio1();
        ejercicio1.ejercicio();
    }
}
