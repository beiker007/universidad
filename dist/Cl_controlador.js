import Cl_mVehiculo from "./Cl_mVehiculo.js";
import Cl_mVivienda from "./Cl_mVivienda.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarVivienda(data) {
        let mVivienda = new Cl_mVivienda({
            cedula: data.cedula,
            edoCivil: data.edoCivil,
            montoSolicitado: data.montoSolicitado,
        });
        this.modelo.procesarVivienda(mVivienda);
        this.reportarPrestamo({ mPrestamo: mVivienda });
    }
    procesarVehiculo(data) {
        let mVehiculo = new Cl_mVehiculo({
            cedula: data.cedula,
            edoCivil: data.edoCivil,
            modelo: data.modelo
        });
        this.modelo.procesarVehiculo(mVehiculo);
        this.reportarPrestamo({ mPrestamo: mVehiculo });
    }
    reportarPrestamo({ mPrestamo }) {
        this.vista.reportarPrestamo({
            dataPrestamo: mPrestamo.toJSON(),
            totalPrestamosFinal: this.modelo.totalPrestamosFinal(),
            totalInteresFinal: this.modelo.totalInteresFinal(),
            porcentajeIntereses: this.modelo.porcentajeIntereses(),
        });
        this.vista.show();
    }
}
