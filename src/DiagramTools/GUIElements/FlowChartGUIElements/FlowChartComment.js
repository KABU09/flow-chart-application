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
exports.FlowChartComment = void 0;
var TextBlock_1 = require("../GenericGUIElements/TextBlock");
/**
 * Comment for FlowChart diagram
 */
var FlowChartComment = /** @class */ (function (_super) {
    __extends(FlowChartComment, _super);
    function FlowChartComment() {
        var _this = _super.call(this, "Comment", "Some comment", "#e68d19", true, "#F8F8F8") || this;
        _this.ports = new Array();
        return _this;
    }
    return FlowChartComment;
}(TextBlock_1.TextBlock));
exports.FlowChartComment = FlowChartComment;
