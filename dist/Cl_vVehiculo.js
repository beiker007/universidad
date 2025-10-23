import Cl_vPrestamo from "./Cl_vPrestamo.js";
export default class Cl_vVehiculo extends Cl_vPrestamo {
    constructor() {
        super();
        this.divInModelo = this.crearHTMLElement({ elementName: "divInModelo" });
        this.inModelo = this.crearHTMLInputElement({ elementName: "inModelo" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptar",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarVehiculo({
                    cedula: this.cedula,
                    edoCivil: this.edoCivil,
                    modelo: this.modelo,
                });
            },
        });
    }
    get modelo() {
        return this.inModelo.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Vehículo" });
        this.inModelo.value = "";
        this.divInModelo.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
