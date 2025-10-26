import Cl_mAgenciaViajes from "./Cl_mAgenciaViajes.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vAgenciaViajes from "./Cl_vAgenciaViajes.js";
import Cl_mNacional from "./Cl_mNacional.js";
import Cl_mInternacional from "./Cl_mInternacional.js";
import { paqueteInternacional, paqueteNacional } from "./_data.js";
export default class Cl_index {
    constructor() {
        let vista = new Cl_vAgenciaViajes();
        let modelo = new Cl_mAgenciaViajes();
        this.controlador = new Cl_controlador(modelo, vista);
        vista.controlador = this.controlador;
        this.iniciarData();
    }
    iniciarData() {
        this.controlador.procesarPaqueteNacional(new Cl_mNacional(paqueteNacional[0]));
        this.controlador.procesarPaqueteNacional(new Cl_mNacional(paqueteNacional[1]));
        this.controlador.procesarPaqueteNacional(new Cl_mNacional(paqueteNacional[2]));
        this.controlador.procesarPaqueteNacional(new Cl_mNacional(paqueteNacional[3]));
        this.controlador.procesarPaqueteInternacional(new Cl_mInternacional(paqueteInternacional[0]));
        this.controlador.procesarPaqueteInternacional(new Cl_mInternacional(paqueteInternacional[1]));
        this.controlador.procesarPaqueteInternacional(new Cl_mInternacional(paqueteInternacional[2]));
        this.controlador.procesarPaqueteInternacional(new Cl_mInternacional(paqueteInternacional[3]));
    }
}
