import Cl_vPrestamo from "./Cl_vPrestamo.js";

interface iVehiculo {
  cedula: number;
  edoCivil: string;
  modelo: string;
}

export default class Cl_vVehiculo extends Cl_vPrestamo {
  private divInModelo: HTMLElement;
  private inModelo: HTMLInputElement;
  private btAceptar: HTMLButtonElement;

  constructor() {
    super();
    this.divInModelo = this.crearHTMLElement({ elementName: "divInModelo" });
    this.inModelo = this.crearHTMLInputElement({ elementName: "inModelo" });
    this.btAceptar = this.crearHTMLButtonElement({
      elementName: "btAceptar",
      onclick: () =>
        this.controlador?.procesarVehiculo({
          cedula: this.cedula,
          edoCivil: this.edoCivil,
          modelo: this.modelo,
        }),
    });
  }

  get modelo(): string {
    return this.inModelo.value;
  }
  show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Vehículo" });
    this.inModelo.value = "";
    this.divInModelo.hidden = ver === false;
    this.btAceptar.hidden = ver === false;
  }
}
export { iVehiculo };
