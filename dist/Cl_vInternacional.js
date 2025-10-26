import Cl_vPaquetesTuristicos from "./Cl_vPaquetesTuristicos.js";
export default class Cl_vInternacional extends Cl_vPaquetesTuristicos {
    constructor() {
        super();
        this.btAceptar = this.creaHTMLButtonElement({
            elementName: "btAceptarInternacional",
            onclick: () => this.controlador?.procesarPaqueteInternacional({
                costo: this.costo,
                codigo: this.codigo,
            }),
        });
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Internacional" });
        this.btAceptar.hidden = ver === false;
    }
}
