import Cl_mPrestamo from "./Cl_mPrestamo.js";   
export default class Cl_mVivienda extends Cl_mPrestamo{ 
private _montoSolicitado: number = 0;   

  constructor({cedula,edoCivil, montoSolicitado = 0} :{cedula: number, edoCivil: string, montoSolicitado: number}    ) {
    super({cedula, edoCivil});
    this.montoSolicitado = montoSolicitado;
  }

  set montoSolicitado(montoSolicitado: number) {
    this._montoSolicitado = montoSolicitado;
  }

  get montoSolicitado(): number {
    return this._montoSolicitado;
  }

montoFinal(): number {
  return this.edoCivil.toLowerCase() === "c"
    ? this.montoSolicitado * 1.1
    : this.montoSolicitado;
}

intereses(): number {
  return this.montoFinal() * 0.10;
}

  toJSON() {
    return {
      ...super.toJSON(),
      montoSolicitado: this.montoSolicitado
    };
  }
}