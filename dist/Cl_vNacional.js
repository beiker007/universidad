"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Cl_vPaquetesTuristicos_js_1 = require("./Cl_vPaquetesTuristicos.js");
var Cl_vNacional = /** @class */ (function (_super) {
    __extends(Cl_vNacional, _super);
    function Cl_vNacional() {
        //INICIALIZAR ATRIBUTOS DEL PADRE
        var _this = _super.call(this) || this;
        //CREAR LAS ETIQUETAS PARA EL HTML
        _this.divInDestino = _this.createHTMLElement({ elementName: "divInDestino" });
        _this.inDestino = _this.createInputElement({ elementName: "inDestinio" });
        _this.btAceptar = _this.creaHTMLButtonElement({ elementName: "btAceptar",
            onclick: function () {
                var _a;
                return (_a = _this.controlador) === null || _a === void 0 ? void 0 : _a.procesarPaqueteTuristico({});
            }
        });
        return _this;
    }
    return Cl_vNacional;
}(Cl_vPaquetesTuristicos_js_1.default));
exports.default = Cl_vNacional;
