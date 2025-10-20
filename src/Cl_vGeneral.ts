import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vGeneral{
    protected _formName: string;
    protected _vista: HTMLElement;
    protected _controlador: Cl_controlador; 

    constructor({formName}:{formName: string}){
        this._formName = formName;
        this._vista = this.createHTMLElement({
            elementName: this._formName,
            isForm:true,
        })
    }
    set formName(formName:string){
        this._formName = formName;
    }
    get formName():string{
        return this._formName;
    }

    set vista(vista:HTMLElement){this._vista = vista};
    get vista():HTMLElement{return this._vista};

    set controlador(controlador: Cl_controlador){this._controlador = controlador};
    get controlador():Cl_controlador{return this._controlador};


    createHTMLElement({elementName, isForm=false,}: {elementName:string; isForm?: boolean;}):HTMLElement {
        let domElementName = isForm
        ? elementName: `${this.formName}_${elementName}`;
        let domElement = document.getElementById(domElementName) as HTMLElement;
        if (!domElement){
            let msg = `Elemento ${domElementName} no encontrado`;
            alert(msg);
            throw new Error(msg);
        }
        return domElement;
    }

    createInputElement({elementName,}:{elementName:string;}): HTMLInputElement {
        let domElementName = `${this.formName}_${elementName}`;
        let domElement = document.getElementById(domElementName) as HTMLInputElement
        if (!domElement){
            let msg = `Elemento ${domElementName} no encontrado`;
            alert(msg);
            throw new Error(msg);
        }
        return domElement
    }

    creaHTMLButtonElement({elementName, onclick}:{elementName: string; onclick?: ()=> void;}):HTMLButtonElement{
        let domElementName = `${this._formName}_${elementName}`;
        let domElement = document.getElementById(domElementName) as HTMLButtonElement;
        if(!domElement){
            let msg = `Elemento ${domElement} no encontrado`;
            alert(msg);
            throw new Error(msg);
        }
        if (onclick) document.onclick = onclick;
        return domElement;
    }
    show({ver = true}:{ver?: boolean}={ver:true}): void{
        if(this.vista) this.vista.style.display = ver ? "flex" : "none";
    } 
}