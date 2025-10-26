import Cl_mPaqueteTuristico from "./Cl_mPaquetesTuristico.js";
export default class Cl_mNacional extends Cl_mPaqueteTuristico {
    constructor({ costo, codigo, destino, }) {
        super({ costo, codigo });
        this.destino = destino;
    }
    set destino(destino) {
        this._destino = destino;
    }
    get destino() {
        return this._destino;
    }
    // 1.Playa  2.Montaña
    descuento() {
        if (this.destino === 2) {
            return this.costo * 0.1;
        }
        else
            return 0;
    }
    //suma el descuento mas el costo
    // pagar = costo menos descuento
    pagar() {
        return this.costo - this.descuento();
    }
    toJSON() {
        return {
            ...super.toJSON(),
            destino: this.destino,
        };
    }
}
