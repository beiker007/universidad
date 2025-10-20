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
var Cl_vPaquetesTuristicos_1 = require("./Cl_vPaquetesTuristicos");
var Cl_vInternacional = /** @class */ (function (_super) {
    __extends(Cl_vInternacional, _super);
    function Cl_vInternacional() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cl_vInternacional;
}(Cl_vPaquetesTuristicos_1.default));
exports.default = Cl_vInternacional;
