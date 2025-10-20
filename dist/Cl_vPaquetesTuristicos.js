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
var Cl_vGeneral_1 = require("./Cl_vGeneral");
var Cl_vPaquetesTuristicos = /** @class */ (function (_super) {
    __extends(Cl_vPaquetesTuristicos, _super);
    function Cl_vPaquetesTuristicos() {
        var _this = _super.call(this, { formName: "paqueteTuristicoForm" }) || this;
        _this.inCosto = _this.createInputElement({ elementName: "inCosto" });
        _this.inCodigo = _this.createInputElement({ elementName: "inCodigo" });
        _this.lblTipo = _this.createHTMLElement({ elementName: "lblTipo" });
        _this.btCancelar = _this.creaHTMLButtonElement({ elementName: "btCancelar",
            onclick: function () {
                var _a;
                _this.show({ ver: false });
                (_a = _this.controlador) === null || _a === void 0 ? void 0 : _a.vista.show();
            }, });
        return _this;
    }
    Object.defineProperty(Cl_vPaquetesTuristicos.prototype, "costo", {
        get: function () {
            return +this.inCosto.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cl_vPaquetesTuristicos.prototype, "codigo", {
        get: function () {
            return this.inCodigo.value;
        },
        enumerable: false,
        configurable: true
    });
    Cl_vPaquetesTuristicos.prototype.show = function (_a) {
        var _b = _a.ver, ver = _b === void 0 ? true : _b, _c = _a.nombreTipo, nombreTipo = _c === void 0 ? "" : _c;
        _super.prototype.show.call(this, { ver: ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inCosto.value = "";
        this.inCodigo.value = "";
        this.inCosto.focus();
    };
    return Cl_vPaquetesTuristicos;
}(Cl_vGeneral_1.default));
exports.default = Cl_vPaquetesTuristicos;
