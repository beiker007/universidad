import Cl_mPaqueteTuristico from "./Cl_mPaquetesTuristico.js";
import Cl_mInternacional from "./Cl_mInternacional.js";

export default class Cl_mAgenciaViajes {
  private _acumPrecioViajes: number = 0;
  private _contPaquetes: number = 0;
  private _contPaquetesInternacionales: number = 0;

  constructor() {}

  procesarPaquetesTuristicos(paquete: Cl_mPaqueteTuristico) {
    this._contPaquetes++;
    this._acumPrecioViajes += paquete.pagar();
    // Contar solo si es paquete internacional
    if (paquete instanceof Cl_mInternacional) {
      this._contPaquetesInternacionales++;
    }
  }
  totalVendido():number{
    return this._acumPrecioViajes;
  }

  porcPaquetesInternacionales():number{
    if (this._contPaquetes === 0) return 0;
    return (this._contPaquetesInternacionales / this._contPaquetes) * 100;
  }

  cantPaquetesInternacionales():number{
    return this._contPaquetesInternacionales; 
  }
}
