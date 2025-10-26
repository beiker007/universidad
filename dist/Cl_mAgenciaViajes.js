import Cl_mInternacional from "./Cl_mInternacional.js";
export default class Cl_mAgenciaViajes {
    constructor() {
        this._acumPrecioViajes = 0;
        this._contPaquetes = 0;
        this._contPaquetesInternacionales = 0;
    }
    procesarPaquetesTuristicos(paquete) {
        this._contPaquetes++;
        this._acumPrecioViajes += paquete.pagar();
        // Contar solo si es paquete internacional
        if (paquete instanceof Cl_mInternacional) {
            this._contPaquetesInternacionales++;
        }
    }
    totalVendido() {
        return this._acumPrecioViajes;
    }
    porcPaquetesInternacionales() {
        if (this._contPaquetes === 0)
            return 0;
        return (this._contPaquetesInternacionales / this._contPaquetes) * 100;
    }
    cantPaquetesInternacionales() {
        return this._contPaquetesInternacionales;
    }
}
