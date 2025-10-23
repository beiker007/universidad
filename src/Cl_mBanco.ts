import Cl_mVehiculo from "./Cl_mVehiculo.js";
import Cl_mVivienda from "./Cl_mVivienda.js";

export default class Cl_mBanco {
    private acTotalVehiculo: number = 0.0 ;
    private acInteresVehiculo: number = 0.0;
    private acTotalVivienda: number = 0.0;
    private acInteresVivienda: number = 0.0;

    constructor() {
        this.acTotalVehiculo = 0.0;
        this.acInteresVehiculo = 0.0;
        this.acTotalVivienda = 0.0;
        this.acInteresVivienda = 0.0;
    }
    

    procesarVehiculo(vehiculo: Cl_mVehiculo): void {
        this.acTotalVehiculo += vehiculo.montoFinal();
        this.acInteresVehiculo += vehiculo.intereses();
    }


    procesarVivienda(vivienda: Cl_mVivienda): void {
        this.acTotalVivienda += vivienda.montoFinal();
        this.acInteresVivienda += vivienda.intereses();
    }

    totalPrestamosFinal(): number {
        return this.acTotalVehiculo + this.acTotalVivienda;
    }

    totalInteresFinal(): number {
        return this.acInteresVehiculo + this.acInteresVivienda;
    }

    porcentajeIntereses(): number {
        if (this.totalPrestamosFinal() > 0) {
            return (this.totalInteresFinal() / this.totalPrestamosFinal()) * 100;
        } else {
            return 0;
        }
    }
}