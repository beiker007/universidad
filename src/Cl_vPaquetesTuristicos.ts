import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vPaquetesTuristicos extends Cl_vGeneral{
    private inCosto: HTMLInputElement;
    private inCodigo: HTMLInputElement;
    private lblTipo: HTMLElement;
    private btCancelar: HTMLButtonElement;

    constructor(){
        super({formName: "paqueteTuristicoForm"});
        this.inCosto = this.createInputElement({elementName:"inCosto"});
        this.inCodigo = this.createInputElement({elementName: "inCodigo"});
        this.lblTipo = this.createHTMLElement({elementName:"lblTipo"});
        this.btCancelar = this.creaHTMLButtonElement({elementName:"btCancelar", 
            onclick:() => {
                this.show({ver:false});
                this.controlador?.vista.show();
        },})
    }
    get costo():number{
        return +this.inCosto.value;
    }
    get codigo():string{
        return this.inCodigo.value;
    }

    show({ver= true, nombreTipo="",}:
        {
            ver?: boolean;
            nombreTipo?: string;
        }
    ):void{
        super.show({ver});
        this.lblTipo.innerHTML =nombreTipo;
        this.inCosto.value = "";
        this.inCodigo.value = "";
        this.inCosto.focus();
    }
}