import Cl_mPrestamo from "./Cl_mPrestamo.js";
export default class Cl_mVivienda extends Cl_mPrestamo {
    constructor({ cedula, edoCivil, montoSolicitado = 0 }) {
        super({ cedula, edoCivil });
        this._montoSolicitado = 0;
        this.montoSolicitado = montoSolicitado;
    }
    set montoSolicitado(montoSolicitado) {
        this._montoSolicitado = montoSolicitado;
    }
    get montoSolicitado() {
        return this._montoSolicitado;
    }
    montoFinal() {
        return this.edoCivil.toLowerCase() === "c"
            ? this.montoSolicitado * 1.1
            : this.montoSolicitado;
    }
    intereses() {
        return this.montoFinal() * 0.10;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { montoSolicitado: this.montoSolicitado });
    }
}
