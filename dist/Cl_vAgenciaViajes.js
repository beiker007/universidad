import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_vInternacional from "./Cl_vInternacional.js";
import Cl_vNacional from "./Cl_vNacional.js";
export default class Cl_vAgenciaViajes extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this._vNacional = new Cl_vNacional();
        this._vInternacional = new Cl_vInternacional();
        this.dataPaqueteTuristico = this.createHTMLElement({ elementName: "dataPaqueteTuristico" });
        this.lblTotalVendido = this.createHTMLElement({ elementName: "lblTotalVendido" });
        this.lblCantPaquetesInternacionales = this.createHTMLElement({ elementName: "lblCantPaquetesInternacionales" });
        this.lblPorcPaqInternacionales = this.createHTMLElement({ elementName: "lblPorcPaqInternacionales" });
        this.btAgregarNacional = this.creaHTMLButtonElement({
            elementName: "btAgregarNacional",
            onclick: () => {
                this.show({ ver: false });
                this.vNacional.show();
            },
        });
        this.btAgregarInternacional = this.creaHTMLButtonElement({
            elementName: "btAgregarInternacional",
            onclick: () => {
                this.show({ ver: false });
                this.vInternacional.show();
            },
        });
        this.dataPaqueteTuristico.innerHTML = "";
        this.vNacional.show({ ver: false });
        this.vInternacional.show({ ver: false });
    }
    set controlador(controlador) {
        super.controlador = controlador;
        this.vNacional.controlador = controlador;
        this.vInternacional.controlador = controlador;
    }
    get vNacional() {
        return this._vNacional;
    }
    get vInternacional() {
        return this._vInternacional;
    }
    reportarPaqueteTuristico({ dataPaqueteTuristico, totalVendido, porcPaquetesInternacionales, cantPaquetesInternacionales, }) {
        this.dataPaqueteTuristico.innerHTML += `
        <tr>
          <td class="colNumber">$ ${dataPaqueteTuristico.costo.toFixed(2)}</td>
          <td class="colNumber">${dataPaqueteTuristico.codigo}</td>
          <td class="colNumber">${dataPaqueteTuristico.destino ? dataPaqueteTuristico.destino : "--"}</td>
          <td class="colCurrency">${typeof dataPaqueteTuristico.descuento === 'number' ? `$ ${dataPaqueteTuristico.descuento.toFixed(2)}` : "--"}</td>
          <td class="colCurrency">${`$ ${dataPaqueteTuristico.pagar.toFixed(2)}`}</td>
        </tr>
    `;
        this.lblTotalVendido.innerHTML = totalVendido.toFixed(2);
        this.lblPorcPaqInternacionales.innerHTML = porcPaquetesInternacionales.toFixed(2);
        this.lblCantPaquetesInternacionales.innerHTML = cantPaquetesInternacionales.toFixed();
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vNacional.show({ ver: false });
            this.vInternacional.show({ ver: false });
        }
    }
}
