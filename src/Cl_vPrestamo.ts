import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vPrestamo extends Cl_vGeneral {
  private inCedula: HTMLInputElement;
  private inEdoCivil: HTMLInputElement;
  private lblTipo: HTMLElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    super({ formName: "prestamoForm" });
    this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
    this.inCedula = this.crearHTMLInputElement({ elementName: "inCedula" });
    this.inEdoCivil = this.crearHTMLInputElement({ elementName: "inEdoCivil" });
    this.btCancelar = this.crearHTMLButtonElement({
      elementName: "btCancelar",

      onclick: () => {
        this.show({ ver: false });
        this.controlador?.vista.show();
      },
    });
  }

  get cedula(): number {
    return +this.inCedula.value;
  }
  get edoCivil(): string {
    return this.inEdoCivil.value;
  }

  show({
    ver = true,
    nombreTipo = "",
  }: {
    ver?: boolean;
    nombreTipo?: string;
  }): void {
    super.show({ ver });
    this.lblTipo.innerHTML = nombreTipo;
    this.inCedula.value = "";
    this.inEdoCivil.value = "";
    this.inCedula.focus();
  }
}
