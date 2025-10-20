import Cl_vPaquetesTuristicos from "./Cl_vPaquetesTuristicos.js";
interface iNacional{
    costo:number;
    codigo:string;
    destino: number;
    descuento: number;
    pagar: number;
}
export default class Cl_vNacional extends Cl_vPaquetesTuristicos{
    private divInDestino: HTMLElement;
    private inDestino: HTMLElement;
    private btnAceptar: HTMLButtonElement;

    constructor(){
        super();
        this.divInDestino = this.createHTMLElement({elementName:"divInDestino"});
        this.inDestino = this.createInputElement({elementName: "inDestinio"});
        this.btnAceptar = this.creaHTMLButtonElement({elementName: "btnAceptar",
            onclick:() =>this.controlador?.procesarPaqueteTuristico({
                
            })
        });

    }
}

export {iNacional};