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
exports.FlowChartOutput = void 0;
var Port_1 = require("../Port");
var Doc_1 = require("../GenericGUIElements/Doc");
/**
 * Output for FlowChart diagram
 */
var FlowChartOutput = /** @class */ (function (_super) {
    __extends(FlowChartOutput, _super);
    function FlowChartOutput() {
        var _this = _super.call(this, "Output", "print 'message'", "#7708cc", true, "#F8F8F8") || this;
        _this.ports = new Array();
        _this.addPort(new Port_1.Port(Port_1.Position.UP, true, true));
        _this.addPort(new Port_1.Port(Port_1.Position.LEFT, true, true));
        _this.addPort(new Port_1.Port(Port_1.Position.RIGHT, true, true));
        _this.addPort(new Port_1.Port(Port_1.Position.DOWN, true, true));
        return _this;
    }
    return FlowChartOutput;
}(Doc_1.Doc));
exports.FlowChartOutput = FlowChartOutput;
