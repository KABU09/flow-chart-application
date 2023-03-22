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
exports.FlowChartSimpleLine = void 0;
var ArrowHead_1 = require("../GenericGUIElements/ArrowHead");
var ArrowBody_1 = require("../GenericGUIElements/ArrowBody");
var Line_1 = require("../GenericGUIElements/Line");
/**
 * Line for FlowChart diagram
 */
var FlowChartSimpleLine = /** @class */ (function (_super) {
    __extends(FlowChartSimpleLine, _super);
    function FlowChartSimpleLine() {
        var _this = this;
        var fromHead = new ArrowHead_1.ArrowHead("", "", "", false);
        var toHead = new ArrowHead_1.ArrowHead("Directed", "F1 m 0,0 l 8,4 -8,4 2,-4 z");
        var body = new ArrowBody_1.ArrowBody("", "M0 0 L1 0");
        _this = _super.call(this, "simpleLine", "", "#DFE9DF", false, "#000000", fromHead, toHead, body) || this;
        return _this;
    }
    return FlowChartSimpleLine;
}(Line_1.Line));
exports.FlowChartSimpleLine = FlowChartSimpleLine;
