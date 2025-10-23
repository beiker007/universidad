export default class Cl_mPrestamo {
    constructor({ cedula, edoCivil }) {
        this._cedula = 0;
        this._edoCivil = "";
        this._cedula = cedula;
        this._edoCivil = edoCivil;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set edoCivil(edoCivil) {
        this._edoCivil = edoCivil;
    }
    get edoCivil() {
        return this._edoCivil;
    }
    montoFinal() {
        return 0;
    }
    intereses() {
        return 0;
    }
    toJSON() {
        return {
            cedula: this._cedula,
            edoCivil: this._edoCivil,
            montoFinal: this.montoFinal(),
            intereses: this.intereses(),
        };
    }
}
