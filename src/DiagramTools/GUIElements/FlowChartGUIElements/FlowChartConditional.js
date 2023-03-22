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
exports.FlowChartConditional = void 0;
var Diamond_1 = require("../GenericGUIElements/Diamond");
var Port_1 = require("../Port");
/**
 * Conditional for FlowChart diagram
 */
var FlowChartConditional = /** @class */ (function (_super) {
    __extends(FlowChartConditional, _super);
    function FlowChartConditional() {
        var _this = _super.call(this, "Conditional", "Condition", "#5794FA", true, "#F8F8F8") || this;
        _this.addPort(new Port_1.Port(Port_1.Position.UP, false, true));
        _this.addPort(new Port_1.Port(Port_1.Position.LEFT, true, false));
        _this.addPort(new Port_1.Port(Port_1.Position.RIGHT, true, false));
        return _this;
    }
    return FlowChartConditional;
}(Diamond_1.Diamond));
exports.FlowChartConditional = FlowChartConditional;
