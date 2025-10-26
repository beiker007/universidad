import Cl_mPaqueteTuristico from "./Cl_mPaquetesTuristico.js";
export default class Cl_mInternacional extends Cl_mPaqueteTuristico {
    // MOSCA lo hice sin ver algun ejemplo
    constructor({ costo, codigo, }) {
        super({ costo, codigo });
    }
    descuento() {
        return this.costo * 0.15;
    }
    pagar() {
        return this.costo - this.descuento();
    }
}
