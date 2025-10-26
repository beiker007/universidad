import Cl_vPaquetesTuristicos from "./Cl_vPaquetesTuristicos.js";
interface iNacional{
    costo:number;
    codigo:string;
    destino: number;
}
export default class Cl_vNacional extends Cl_vPaquetesTuristicos{
    private divInDestino: HTMLElement;
    private inDestino: HTMLInputElement;
    private btAceptar: HTMLButtonElement;

    constructor(){
        //INICIALIZAR ATRIBUTOS DEL PADRE
        super();
        //CREAR LAS ETIQUETAS PARA EL HTML
        this.divInDestino = this.createHTMLElement({elementName:"divInDestino"});
        this.inDestino = this.createInputElement({elementName: "inDestino"});
        this.btAceptar = this.creaHTMLButtonElement({elementName: "btAceptarNacional",
            onclick:() => this.controlador?.procesarPaqueteNacional({
                costo: this.costo,
                codigo: this.codigo,
                destino: this.destino,
            }),
        });
    }
    get destino():number{
        return +this.inDestino.value;
    }
    show({ ver = true}: { ver?: boolean} = {ver: true}) {
        super.show({ver, nombreTipo:"Nacional"});
        this.inDestino.value = "";
        this.divInDestino.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
export {iNacional};