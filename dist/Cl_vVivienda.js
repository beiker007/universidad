import Cl_vPrestamo from "./Cl_vPrestamo.js";
export default class Cl_vVivienda extends Cl_vPrestamo {
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
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarVivienda({
                    cedula: this.cedula,
                    edoCivil: this.edoCivil,
                    montoSolicitado: this.montoSolicitado,
                });
            },
        });
    }
    get montoSolicitado() {
        return +this.inMontoSolicitado.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Vida" });
        this.inMontoSolicitado.value = "";
        this.divInMontoSolicitado.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
