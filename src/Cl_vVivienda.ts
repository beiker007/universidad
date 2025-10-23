import Cl_vPrestamo from "./Cl_vPrestamo.js";

interface iVivienda {
  cedula: number;
  edoCivil: string;
  montoSolicitado: number;
}

export default class Cl_vVivienda extends Cl_vPrestamo {
  private divInMontoSolicitado: HTMLElement;
  private inMontoSolicitado: HTMLInputElement;
  private btAceptar: HTMLButtonElement;

  constructor() {
    super();
    this.divInMontoSolicitado = this.crearHTMLElement({
      elementName: "divInMontoSolicitado",
    });
    this.inMontoSolicitado = this.crearHTMLInputElement({
      elementName: "inMontoSolicitado",
    });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptar",

      onclick: () =>
        this.controlador?.procesarVivienda({
          cedula: this.cedula,
          edoCivil: this.edoCivil,
          montoSolicitado: this.montoSolicitado,
        }),
    });
  }

  get montoSolicitado(): number {
    return +this.inMontoSolicitado.value;
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Vida" });
    this.inMontoSolicitado.value = "";
    this.divInMontoSolicitado.hidden = ver === false;
    this.btAceptar.hidden = ver === false;
  }
}
export { iVivienda };
