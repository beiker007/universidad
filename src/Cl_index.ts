/**
 * PRÉSTAME-2
Un Banco requiere la realización de un programa de computadoras 
que les permita determinar: el monto final para cada cliente, 
el monto total de sus préstamos y el porcentaje que representa 
el monto de los intereses que cobra a sus clientes. 
De los préstamos para casa o vivienda se conoce: cédula, 
estado civil (S: soltero, C: casado, D: divorciado) y 
monto del préstamo. De los préstamos para vehículo se tiene: 
cédula, estado civil (S: soltero, C: casado, D: divorciado)
 y modelo (N: nuevo, U: usados como nuevos, V: viejos); 
 el monto del préstamo para vehículo es según el modelo: 
 $5000, $3000 y $1000 respectivamente. También se sabe que 
 el monto final del préstamo se incrementa en un 10% si el 
 cliente es casado y que los clientes pagan el 20% de interés 
 sobre el monto final del préstamo si es de vehículos 
 y el 10% de interés sobre el monto final del préstamo 
 si es de vivienda.
 */


import Cl_mBanco from "./Cl_mBanco.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vBanco from "./Cl_vBanco.js";
import Cl_mVivienda from "./Cl_mVivienda.js";
import Cl_mVehiculo from "./Cl_mVehiculo.js";
import { prestamoVivienda, prestamoVehiculo } from "./_data.js";
export default class Cl_index {
     private controlador: Cl_controlador;
    constructor() {
        let vista = new Cl_vBanco();
        let modelo = new Cl_mBanco();
        this.controlador = new Cl_controlador(modelo, vista);
        vista.controlador = this.controlador;
        this.iniciarData();
    }

    iniciarData() {
        this.controlador.procesarVivienda(new Cl_mVivienda(prestamoVivienda[0]));
        this.controlador.procesarVivienda(new Cl_mVivienda(prestamoVivienda[1]));
        this.controlador.procesarVivienda(new Cl_mVivienda(prestamoVivienda[2]));
        this.controlador.procesarVivienda(new Cl_mVivienda(prestamoVivienda[3]));

        this.controlador.procesarVehiculo(new Cl_mVehiculo(prestamoVehiculo[0]));
        this.controlador.procesarVehiculo(new Cl_mVehiculo(prestamoVehiculo[1]));
        this.controlador.procesarVehiculo(new Cl_mVehiculo(prestamoVehiculo[2]));
        this.controlador.procesarVehiculo(new Cl_mVehiculo(prestamoVehiculo[3]));
    }

}
   