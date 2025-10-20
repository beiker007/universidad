"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cl_vGeneral = /** @class */ (function () {
    function Cl_vGeneral(_a) {
        var formName = _a.formName;
        this._formName = formName;
        this._vista = this.createHTMLElement({
            elementName: this._formName,
            isForm: true,
        });
    }
    Object.defineProperty(Cl_vGeneral.prototype, "formName", {
        get: function () {
            return this._formName;
        },
        set: function (formName) {
            this._formName = formName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cl_vGeneral.prototype, "vista", {
        get: function () { return this._vista; },
        set: function (vista) { this._vista = vista; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Cl_vGeneral.prototype, "controlador", {
        get: function () { return this._controlador; },
        set: function (controlador) { this._controlador = controlador; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Cl_vGeneral.prototype.createHTMLElement = function (_a) {
        var elementName = _a.elementName, _b = _a.isForm, isForm = _b === void 0 ? false : _b;
        var domElementName = isForm
            ? elementName : "".concat(this.formName, "_").concat(elementName);
        var domElement = document.getElementById(domElementName);
        if (!domElement) {
            var msg = "Elemento ".concat(domElementName, " no encontrado");
            alert(msg);
            throw new Error(msg);
        }
        return domElement;
    };
    Cl_vGeneral.prototype.createInputElement = function (_a) {
        var elementName = _a.elementName;
        var domElementName = "".concat(this.formName, "_").concat(elementName);
        var domElement = document.getElementById(domElementName);
        if (!domElement) {
            var msg = "Elemento ".concat(domElementName, " no encontrado");
            alert(msg);
            throw new Error(msg);
        }
        return domElement;
    };
    Cl_vGeneral.prototype.creaHTMLButtonElement = function (_a) {
        var elementName = _a.elementName, onclick = _a.onclick;
        var domElementName = "".concat(this._formName, "_").concat(elementName);
        var domElement = document.getElementById(domElementName);
        if (!domElement) {
            var msg = "Elemento ".concat(domElement, " no encontrado");
            alert(msg);
            throw new Error(msg);
        }
        if (onclick)
            document.onclick = onclick;
        return domElement;
    };
    Cl_vGeneral.prototype.show = function (_a) {
        var _b = _a === void 0 ? { ver: true } : _a, _c = _b.ver, ver = _c === void 0 ? true : _c;
        if (this.vista)
            this.vista.style.display = ver ? "flex" : "none";
    };
    return Cl_vGeneral;
}());
exports.default = Cl_vGeneral;
