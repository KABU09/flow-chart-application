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
exports.FlowChartVariableDefinition = void 0;
var Rhomboid_1 = require("../GenericGUIElements/Rhomboid");
var Port_1 = require("../Port");
/**
 * Variable/definition for FlowChart diagram
 */
var FlowChartVariableDefinition = /** @class */ (function (_super) {
    __extends(FlowChartVariableDefinition, _super);
    function FlowChartVariableDefinition() {
        var _this = _super.call(this, "Variable", "x <- value", "#1b8061", true, "#F8F8F8") || this;
        _this.addPort(new Port_1.Port(Port_1.Position.UP, true, true));
        _this.addPort(new Port_1.Port(Port_1.Position.DOWN, true, true));
        _this.addPort(new Port_1.Port(Port_1.Position.LEFT, true, true));
        _this.addPort(new Port_1.Port(Port_1.Position.RIGHT, true, true));
        return _this;
    }
    return FlowChartVariableDefinition;
}(Rhomboid_1.Rhomboid));
exports.FlowChartVariableDefinition = FlowChartVariableDefinition;
