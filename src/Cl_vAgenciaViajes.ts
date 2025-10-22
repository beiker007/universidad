import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vInternacional from "./Cl_vInternacional.js";
import Cl_vNacional from "./Cl_vNacional.js";

interface iPaqueteTuristico{
    costo: number;
    codigo: string;
    //ATRIBUTO ESPÈCIFICO DEL PAQUETE NACIONAL
    destino?: number;
    descuento: number;
    pagar: number;
}
export default class Cl_vAgenciaViajes extends Cl_vGeneral{
    protected _vNacional: Cl_vNacional;
    protected _vInternacional: Cl_vInternacional;
    private dataPaqueteTuristico: HTMLElement;
    private lblTotalVendido: HTMLElement;
    private lblPaquetesInternacionales: HTMLElement;
    private lblPorcPaqInternacionales: HTMLElement;
    private btAgregarNacional: HTMLElement;
    private btAgregarInternacional: HTMLElement;

    constructor(){
        super({formName:"mainForm"});
        this._vNacional = new Cl_vNacional();
        this._vInternacional= new Cl_vInternacional();
        this.
    }
}