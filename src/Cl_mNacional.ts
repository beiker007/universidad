import Cl_mPaqueteTuristico from "./Cl_mPaquetesTuristico";

export default class Cl_mNacional extends Cl_mPaqueteTuristico {
  private _destino: number;
  constructor({
    costo,
    codigo,
    destino,
  }: {
    costo: number;
    codigo: string;
    destino: number;
  }) {
    super({ costo, codigo });
    this.destino = destino;
  }
  set destino(destino: number) {
    this._destino = destino;
  }
  get destino(): number {
    return this._destino;
  }
  // 1.Playa  2.Montaña
  descuento(): number {
    if (this.destino === 2) {
      return this.costo * 0.1;
    } else return 0;
  }
  //suma el descuento mas el costo
  pagar(): number {
    return this.costo + this.descuento();
  }
}
