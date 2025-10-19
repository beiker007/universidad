import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vGeneral{
    protected formName: string;
    protected vista: HTMLElement;
    protected controlador: Cl_controlador; 

    constructor({formName}:{formName: string}){
        this.formName = formName;
    }

    createHTMLElement({elementName, isForm?}:HTMLElement
}