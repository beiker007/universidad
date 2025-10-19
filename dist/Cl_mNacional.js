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
var Cl_mPaquetesTuristico_1 = require("./Cl_mPaquetesTuristico");
var Cl_mNacional = /** @class */ (function (_super) {
    __extends(Cl_mNacional, _super);
    function Cl_mNacional(_a) {
        var costo = _a.costo, codigo = _a.codigo, destino = _a.destino, tipo = _a.tipo;
        var _this = _super.call(this, { costo: costo, codigo: codigo, tipo: tipo }) || this;
        _this.destino = destino;
        return _this;
    }
    Object.defineProperty(Cl_mNacional.prototype, "destino", {
        get: function () {
            return this._destino;
        },
        set: function (destino) {
            this._destino = destino;
        },
        enumerable: false,
        configurable: true
    });
    // 1.Playa  2.Montaña
    Cl_mNacional.prototype.descuento = function () {
        if (this.destino === 2) {
            return this.costo * 0.1;
        }
        else
            return 0;
    };
    //suma el descuento mas el costo
    Cl_mNacional.prototype.pagar = function () {
        return this.costo + this.descuento();
    };
    return Cl_mNacional;
}(Cl_mPaquetesTuristico_1.default));
exports.default = Cl_mNacional;
