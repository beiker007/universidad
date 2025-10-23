export default class Cl_mPrestamo {
  public _cedula: number = 0;
  public _edoCivil: string = "";

  constructor({ cedula, edoCivil }: { cedula: number; edoCivil: string }) {
    this._cedula = cedula;
    this._edoCivil= edoCivil;
  }
  set cedula(cedula: number) {
    this._cedula = cedula;
  }
  get cedula(): number {
    return this._cedula;
  }
  set edoCivil(edoCivil: string) {
    this._edoCivil = edoCivil;
  }
  get edoCivil(): string {
    return this._edoCivil;
  }

  montoFinal(): number {
    return 0;
  }

  intereses(): number {
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
