import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vPrestamo extends Cl_vGeneral {
    constructor() {
        super({ formName: "prestamoForm" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.inCedula = this.crearHTMLInputElement({ elementName: "inCedula" });
        this.inEdoCivil = this.crearHTMLInputElement({ elementName: "inEdoCivil" });
        this.btCancelar = this.crearHTMLButtonElement({
            elementName: "btCancelar",
            onclick: () => {
                var _a;
                this.show({ ver: false });
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            },
        });
    }
    get cedula() {
        return +this.inCedula.value;
    }
    get edoCivil() {
        return this.inEdoCivil.value;
    }
    show({ ver = true, nombreTipo = "", }) {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inCedula.value = "";
        this.inEdoCivil.value = "";
        this.inCedula.focus();
    }
}
