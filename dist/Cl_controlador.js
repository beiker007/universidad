import Cl_mInternacional from "./Cl_mInternacional.js";
import Cl_mNacional from "./Cl_mNacional.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarPaqueteNacional(data) {
        let mNacional = new Cl_mNacional({
            costo: data.costo,
            codigo: data.codigo,
            destino: data.destino,
        });
        this.modelo.procesarPaquetesTuristicos(mNacional);
        this.reportarPaqueteTuristico({ mPaqueteTuristico: mNacional });
    }
    procesarPaqueteInternacional(data) {
        let mInternacional = new Cl_mInternacional({
            costo: data.costo,
            codigo: data.codigo,
        });
        this.modelo.procesarPaquetesTuristicos(mInternacional);
        this.reportarPaqueteTuristico({ mPaqueteTuristico: mInternacional });
    }
    reportarPaqueteTuristico({ mPaqueteTuristico }) {
        this.vista.reportarPaqueteTuristico({
            dataPaqueteTuristico: mPaqueteTuristico.toJSON(),
            totalVendido: this.modelo.totalVendido(),
            porcPaquetesInternacionales: this.modelo.porcPaquetesInternacionales(),
            cantPaquetesInternacionales: this.modelo.cantPaquetesInternacionales(),
        });
        this.vista.show();
    }
}
