import Cl_mVehiculo from "./Cl_mVehiculo.js";
import Cl_mVivienda from "./Cl_mVivienda.js";
import Cl_mPrestamo from "./Cl_mPrestamo.js";
import Cl_mBanco from "./Cl_mBanco.js";
import Cl_vBanco from "./Cl_vBanco.js";
import { iVivienda } from "./Cl_vVivienda.js";
import { iVehiculo } from "./Cl_vVehiculo.js";


export default class Cl_controlador {
    public modelo: Cl_mBanco;
    public vista: Cl_vBanco;
    constructor(modelo: Cl_mBanco, vista: Cl_vBanco) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarVivienda(data: iVivienda) {
        let mVivienda = new Cl_mVivienda({
           cedula: data.cedula,
           edoCivil: data.edoCivil,
            montoSolicitado: data.montoSolicitado,
    });
        this.modelo.procesarVivienda(mVivienda);
        this.reportarPrestamo({ mPrestamo: mVivienda });
    }

    procesarVehiculo(data: iVehiculo) {
        let mVehiculo = new Cl_mVehiculo({
            cedula: data.cedula,
            edoCivil: data.edoCivil,
            modelo: data.modelo
            
    });
        this.modelo.procesarVehiculo(mVehiculo);
        this.reportarPrestamo({ mPrestamo: mVehiculo });
    }

    reportarPrestamo({ mPrestamo }: { mPrestamo: Cl_mPrestamo }) {
        this.vista.reportarPrestamo({
            dataPrestamo: mPrestamo.toJSON(), 
            totalPrestamosFinal: this.modelo.totalPrestamosFinal(),
            totalInteresFinal: this.modelo.totalInteresFinal(),
            porcentajeIntereses: this.modelo.porcentajeIntereses(),
        });
        this.vista.show();
    }


}