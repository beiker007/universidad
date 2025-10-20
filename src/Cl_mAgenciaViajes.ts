import Cl_mPaqueteTuristico from "./Cl_mPaquetesTuristico";

export default class Cl_mAgenciaViajes {
  private _acumPrecioViajes: number = 0;
  private _contPaquetes: number = 0;
  private _contPaquetesInternacionales: number = 0;

  constructor() {}

  procesarPaquetesTuristicos(paquete: Cl_mPaqueteTuristico) {
    this._contPaquetes++;
    this._acumPrecioViajes += paquete.pagar();
    // 2 = paquetes internacionales
    if (paquete._tipo === 2) {
      this._contPaquetesInternacionales++;
    }
  }
  totalVendido():number{
    return this._acumPrecioViajes;
  }

  porcPaquetesInternacionales():number{
    return (this._contPaquetes/this._contPaquetesInternacionales);
  }

  cantPaquetesInternacionales():number{
    return this._contPaquetesInternacionales; 
  }
}
