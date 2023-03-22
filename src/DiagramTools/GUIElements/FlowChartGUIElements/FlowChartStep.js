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
exports.FlowChartStep = void 0;
var Port_1 = require("../Port");
var Rectangle_1 = require("../GenericGUIElements/Rectangle");
/**
 * Step for FlowChart diagram
 */
var FlowChartStep = /** @class */ (function (_super) {
    __extends(FlowChartStep, _super);
    function FlowChartStep() {
        var _this = _super.call(this, "Step", "Some Step", "#e68d19", true, "#F8F8F8") || this;
        _this.ports = new Array();
        _this.addPort(new Port_1.Port(Port_1.Position.UP, true, true, 1, 1, true));
        _this.addPort(new Port_1.Port(Port_1.Position.DOWN, true, true, 1, 1, true));
        _this.addPort(new Port_1.Port(Port_1.Position.LEFT, true, true, 1, 1, true));
        _this.addPort(new Port_1.Port(Port_1.Position.RIGHT, true, true, 1, 1, true));
        return _this;
    }
    return FlowChartStep;
}(Rectangle_1.Rectangle));
exports.FlowChartStep = FlowChartStep;
