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
exports.FlowChartStart = void 0;
var Oval_1 = require("../GenericGUIElements/Oval");
var Port_1 = require("../Port");
/**
 * Start for FlowChart diagram
 */
var FlowChartStart = /** @class */ (function (_super) {
    __extends(FlowChartStart, _super);
    function FlowChartStart() {
        var _this = _super.call(this, "Start", "Start", "#E058DC", false, "#F8F8F8") || this;
        _this.addPort(new Port_1.Port(Port_1.Position.UP, true, false));
        _this.addPort(new Port_1.Port(Port_1.Position.DOWN, true, false));
        _this.addPort(new Port_1.Port(Port_1.Position.LEFT, true, false));
        _this.addPort(new Port_1.Port(Port_1.Position.RIGHT, true, false));
        return _this;
    }
    return FlowChartStart;
}(Oval_1.Oval));
exports.FlowChartStart = FlowChartStart;
