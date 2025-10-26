export default class Cl_mPaqueteTuristico {
    constructor({ costo, codigo }) {
        // OJO el prof los coloco en publicos
        this._costo = 0;
        this._codigo = "";
        this._costo = costo;
        this._codigo = codigo;
    }
    set costo(costo) {
        this._costo = costo;
    }
    get costo() {
        return this._costo;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    get codigo() {
        return this._codigo;
    }
    descuento() {
        return 0;
    }
    pagar() {
        return 0;
    }
    toJSON() {
        return {
            costo: this.costo,
            codigo: this.codigo,
            descuento: this.descuento(),
            pagar: this.pagar(),
        };
    }
}
