import Cl_vPaquetesTuristicos from "./Cl_vPaquetesTuristicos.js";

interface iInternacional{
    costo: number;
    codigo: string;
}

export default class Cl_vInternacional extends Cl_vPaquetesTuristicos{
    private btAceptar: HTMLElement;

    constructor(){
        super();
        this.btAceptar = this.creaHTMLButtonElement({
            elementName: "btAceptarInternacional",
            onclick: () => this.controlador?.procesarPaqueteInternacional({
                costo: this.costo,
                codigo: this.codigo,
            }),
        })
    }
    show({ ver= true }: { ver?: boolean} = {ver: true}){
        super.show({ver, nombreTipo: "Internacional"});
        this.btAceptar.hidden = ver === false; 
    }
}

export {iInternacional};