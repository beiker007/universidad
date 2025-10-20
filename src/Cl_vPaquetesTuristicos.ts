import Cl_vGeneral from "./Cl_vGeneral";

export default class Cl_vPaquetesTuristicos extends Cl_vGeneral{
    protected costo: number;
    protected codigo: number;
    private inCosto: HTMLInputElement;
    private inCodigo: HTMLInputElement;
    private lblTipo: HTMLElement;
    private btnCancelar: HTMLButtonElement;

    constructor(){
        super({formName: "paqueteTuristicoForm"});
        
    }
}