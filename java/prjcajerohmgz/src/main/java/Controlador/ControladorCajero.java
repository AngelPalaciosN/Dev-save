package Controlador;

import Modelo.Cuenta;
import Vista.VistaCajero;

import java.util.ArrayList;

public class ControladorCajero {
    private ArrayList<Cuenta> cuentas;
    private VistaCajero vista;
    private Cuenta cuentaActual;

    public ControladorCajero() {
        cuentas = new ArrayList<>();
        vista = new VistaCajero();
    }

    public void iniciar() {
        boolean salir = false;

        System.out.println("Para continuar debe abrir una cuenta:");
        int numero = vista.pedirNumeroCuenta("Ingrese nuevo número de cuenta: ");
        int clave = vista.pedirClave("Ingrese clave para la cuenta: ");
        double saldoInicial = vista.pedirM("Ingrese monto inicial a consignar: ");
        Cuenta nueva = new Cuenta(numero, clave, saldoInicial);
        cuentas.add(nueva);
        vista.mostrarMen("Cuenta creada exitosamente con saldo de $" + saldoInicial);
        System.out.println("Autentique sus creedenciales");
        autenticar();

        while (!salir) {
            int opcion = vista.mostrarM(cuentaActual.getNumero());

            switch (opcion) {
                case 1: // Consignación
                    if (autenticar()) {
                        double monto = vista.pedirM("Ingrese el monto a consignar: ");
                        cuentaActual.consignar(monto);
                        vista.mostrarMen("Consignación exitosa. Saldo actual: $" + cuentaActual.getSaldo());
                    }
                    break;

                case 2: // Retiro
                    if (autenticar()) {
                        int opRetiro = vista.motrarMretiro();
                        double monto = 0;
                        switch (opRetiro) {
                            case 1: monto = 1000; break;
                            case 2: monto = 3000; break;
                            case 3: monto = 10000; break;
                            default:
                                vista.mostrarMen("Operación cancelada.");
                                break;
                        }
                        if (monto > 0) {
                            if (cuentaActual.retirar(monto)) {
                                vista.mostrarMen("Retiro exitoso. Saldo actual: $" + cuentaActual.getSaldo());
                            } else {
                                vista.mostrarMen("Saldo insuficiente.");
                            }
                        }
                    }
                    break;

                case 3: // Transferencia
                    if (autenticar()) {
                        int destino = vista.pedirNumeroCuenta("Ingrese número de cuenta destino:");
                        Cuenta cuentaDestino = buscarCuenta(destino);
                        if (cuentaDestino != null) {
                            double monto = vista.pedirM("Ingrese el monto a transferir: ");
                            if (cuentaActual.transferir(cuentaDestino, monto)) {
                                vista.mostrarMen("Transferencia exitosa. Saldo actual: $" + cuentaActual.getSaldo());
                            } else {
                                vista.mostrarMen("Saldo insuficiente para transferir.");
                            }
                        } else {
                            vista.mostrarMen("Cuenta destino no existe.");
                        }
                    }
                    break;

                case 4: // Cambio de clave
                    if (autenticar()) {
                        int nuevaClave = vista.pedirClave("Ingrese nueva clave: ");
                        cuentaActual.cambiarClave(nuevaClave);
                        vista.mostrarMen("Clave cambiada exitosamente.");
                    }
                    break;

                case 5: // Crear cuenta
                    numero = vista.pedirNumeroCuenta("Ingrese nuevo número de cuenta: ");
                    clave = vista.pedirClave("Ingrese clave para la cuenta: ");
                    saldoInicial = vista.pedirM("Ingrese monto inicial a consignar: ");
                    nueva = new Cuenta(numero, clave, saldoInicial);
                    cuentas.add(nueva);
                    vista.mostrarMen("Cuenta creada exitosamente con saldo de $" + saldoInicial);
                    break;


                case 6: //consultar saldo
                    cuentaActual.getSaldo();
                    vista.mostrarMen("Su saldo es $" + cuentaActual.getSaldo());
                break;

                case 7: // Cambiar cuenta actual
                    if (cuentaActual != null) {
                        vista.mostrarMen("Cuenta actual: " + cuentaActual.getNumero());
                    } else {
                        vista.mostrarMen("No hay cuenta actual activa.");
                    }

                    vista.mostrarMen("Autentique para cambiar de cuenta:");

                    if (autenticar()) {
                        vista.mostrarMen("Cambio de cuenta exitoso. Cuenta actual: " + cuentaActual.getNumero());
                    } else {
                        vista.mostrarMen("No se pudo cambiar la cuenta actual.");
                    }
                    break;



                case 8: // Salir
                    salir = true;
                    vista.mostrarMen("Gracias por usar el cajero.");
                    break;

                default:
                    vista.mostrarMen("Opción inválida.");
            }
        }
    }

    private boolean autenticar() {
        int numero = vista.pedirNumeroCuenta("Ingrese número de cuenta:");
        int clave = vista.pedirClave("Ingrese clave:");
        Cuenta encontrada = buscarCuenta(numero);

        if (encontrada != null && encontrada.getClave() == clave) {
            cuentaActual = encontrada;
            return true;
        } else {
            vista.mostrarMen("Autenticación fallida.");
            return false;
        }
    }

    private Cuenta buscarCuenta(int numero) {
        for (Cuenta c : cuentas) {
            if (c.getNumero() == numero) {
                return c;
            }
        }
        return null;
    }
}
