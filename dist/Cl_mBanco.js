export default class Cl_mBanco {
    constructor() {
        this.acTotalVehiculo = 0.0;
        this.acInteresVehiculo = 0.0;
        this.acTotalVivienda = 0.0;
        this.acInteresVivienda = 0.0;
        this.acTotalVehiculo = 0.0;
        this.acInteresVehiculo = 0.0;
        this.acTotalVivienda = 0.0;
        this.acInteresVivienda = 0.0;
    }
    procesarVehiculo(vehiculo) {
        this.acTotalVehiculo += vehiculo.montoFinal();
        this.acInteresVehiculo += vehiculo.intereses();
    }
    procesarVivienda(vivienda) {
        this.acTotalVivienda += vivienda.montoFinal();
        this.acInteresVivienda += vivienda.intereses();
    }
    totalPrestamosFinal() {
        return this.acTotalVehiculo + this.acTotalVivienda;
    }
    totalInteresFinal() {
        return this.acInteresVehiculo + this.acInteresVivienda;
    }
    porcentajeIntereses() {
        if (this.totalPrestamosFinal() > 0) {
            return (this.totalInteresFinal() / this.totalPrestamosFinal()) * 100;
        }
        else {
            return 0;
        }
    }
}
