import Cl_mPaqueteTuristico from "./Cl_mPaquetesTuristico.js";

export default class Cl_mInternacional extends Cl_mPaqueteTuristico {
  // MOSCA lo hice sin ver algun ejemplo
  constructor({
    costo,
    codigo,
  }: {
    costo: number;
    codigo: string;
  }) {
    super({ costo, codigo});
  }
  descuento(): number {
    return this.costo * 0.15;
  }
  pagar(): number {
    return this.costo - this.descuento();
  }
}
