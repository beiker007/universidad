export default class Cl_vGeneral {
    constructor({ formName }) {
        this._formName = "";
        this._vista = null;
        this._controlador = null;
        this._formName = formName;
        this._vista = this.createHTMLElement({
            elementName: this._formName,
            isForm: true,
        });
    }
    set formName(formName) {
        this._formName = formName;
    }
    get formName() {
        return this._formName;
    }
    set vista(vista) {
        this._vista = vista;
    }
    get vista() {
        return this._vista;
    }
    set controlador(controlador) {
        this._controlador = controlador;
    }
    get controlador() {
        return this._controlador;
    }
    createHTMLElement({ elementName, isForm = false, }) {
        let domElementName = isForm
            ? elementName
            : `${this.formName}_${elementName}`;
        let domElement = document.getElementById(domElementName);
        if (!domElement) {
            let msg = `Elemento ${domElementName} no encontrado`;
            alert(msg);
            throw new Error(msg);
        }
        return domElement;
    }
    createInputElement({ elementName, }) {
        let domElementName = `${this.formName}_${elementName}`;
        let domElement = document.getElementById(domElementName);
        if (!domElement) {
            let msg = `Elemento ${domElementName} no encontrado`;
            alert(msg);
            throw new Error(msg);
        }
        return domElement;
    }
    creaHTMLButtonElement({ elementName, onclick, }) {
        let domElementName = `${this._formName}_${elementName}`;
        let domElement = document.getElementById(domElementName);
        if (!domElement) {
            let msg = `Elemento ${domElement} no encontrado`;
            alert(msg);
            throw new Error(msg);
        }
        if (onclick)
            domElement.onclick = onclick;
        return domElement;
    }
    show({ ver = true } = { ver: true }) {
        if (this.vista)
            this.vista.style.display = ver ? "flex" : "none";
    }
}
