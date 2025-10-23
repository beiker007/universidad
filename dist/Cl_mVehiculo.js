import Cl_mPrestamo from "./Cl_mPrestamo.js";
export default class Cl_mVehiculo extends Cl_mPrestamo {
    constructor({ cedula, edoCivil, modelo = "" }) {
        super({ cedula, edoCivil });
        this._modelo = "";
        this.modelo = modelo;
    }
    set modelo(modelo) {
        this._modelo = modelo;
    }
    get modelo() {
        return this._modelo;
    }
    montoBase() {
        if (this.modelo == "n" || this.modelo == "N") {
            return 5000;
        }
        else if (this.modelo === "u" || this.modelo === "U") {
            return 3000;
        }
        else if (this.modelo === "v" || this.modelo === "V") {
            return 1000;
        }
        else {
            return 0;
        }
    }
    intereses() {
        return this.montoBase() * 0.20;
    }
    montoFinal() {
        if (this.edoCivil == "c" || this.edoCivil == "C") {
            return this.montoBase() * 1.10;
        }
        else
            return this.montoBase();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { modelo: this.modelo });
    }
}
