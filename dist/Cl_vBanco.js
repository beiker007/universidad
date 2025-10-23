import Cl_vVehiculo from "./Cl_vVehiculo.js";
import Cl_vVivienda from "./Cl_vVivienda.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vBanco extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this.vVivienda = new Cl_vVivienda();
        this.vVehiculo = new Cl_vVehiculo();
        this.dataPrestamo = this.crearHTMLElement({ elementName: "dataPrestamo" });
        this.lblTotalPrestamosFinal = this.crearHTMLElement({
            elementName: "lblTotalPrestamosFinal",
        });
        this.lblTotalInteresFinal = this.crearHTMLElement({
            elementName: "lblTotalInteresFinal",
        });
        this.lblPorcentajeIntereses = this.crearHTMLElement({
            elementName: "lblPorcentajeIntereses",
        });
        // Crear los botones y asignar eventos
        this.btAgregarVehiculo = this.crearHTMLButtonElement({
            elementName: "btAgregarVehiculo",
            onclick: () => {
                this.show({ ver: false });
                this.vVehiculo.show();
            },
        });
        this.btAgregarVivienda = this.crearHTMLButtonElement({
            elementName: "btAgregarVivienda",
            onclick: () => {
                this.show({ ver: false });
                this.vVivienda.show();
            },
        });
        this.dataPrestamo.innerHTML = "";
        this.vVehiculo.show({ ver: false });
        this.vVivienda.show({ ver: false });
    }
    set controlador(controlador) {
        // Usar el setter `controlador` definido en la clase base.
        super.controlador = controlador;
        // Asignar también a las vistas hijas. Ellas heredan de Cl_vGeneral
        // por lo que también aceptan la propiedad `controlador`.
        this.vVehiculo.controlador = controlador;
        this.vVivienda.controlador = controlador;
    }
    get vistaVehiculo() {
        return this.vVehiculo;
    }
    get vistaVivienda() {
        return this.vVivienda;
    }
    reportarPrestamo({ dataPrestamo, totalPrestamosFinal, totalInteresFinal, porcentajeIntereses, }) {
        this.dataPrestamo.innerHTML += `<tr>
    <td class="colNumber">${dataPrestamo.cedula}</td>
    <td class="colNumber">${dataPrestamo.edoCivil}</td>
     <td class="colNumber">${dataPrestamo.montoSolicitado ? dataPrestamo.montoSolicitado : "--"}</td>
       <td class="colNumber">${dataPrestamo.modelo ? dataPrestamo.modelo : "--"}</td>
    <td class="colConcurrency">${dataPrestamo.montoFinal.toFixed(2)}</td>
    <td class="colConcurrency">Bs. ${dataPrestamo.intereses.toFixed(2)}</td>
  </tr>`;
        this.lblTotalPrestamosFinal.innerHTML = totalPrestamosFinal.toFixed(2);
        this.lblTotalInteresFinal.innerHTML = totalInteresFinal.toFixed(2);
        this.lblPorcentajeIntereses.innerHTML = porcentajeIntereses.toFixed(2);
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vVehiculo.show({ ver: false });
            this.vVivienda.show({ ver: false });
        }
    }
}
