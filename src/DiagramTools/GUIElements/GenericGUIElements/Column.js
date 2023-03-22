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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
var go = __importStar(require("gojs"));
var Shape_1 = require("../Shape");
var $ = go.GraphObject.make;
/**
 * Column with n rows
 */
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    /**
     * @param title shape title
     * @param innerText array text displayed in rows
     * @param fill shape color
     * @param editable makes the shape text editable
     * @param fontColor shape font color
     * @return
     */
    function Column(title, innerText, fill, editable, fontColor, rows, shape) {
        var _a;
        var _this = _super.call(this, title, innerText[0] || "", fill, editable, fontColor, undefined) || this;
        _this.rows = rows;
        _this.rowsInfo = innerText;
        _this.strokeWidth = 1;
        _this.ports = new Array();
        _this.shape = shape;
        _this.shapeType = ((_a = _this.shape) === null || _a === void 0 ? void 0 : _a.nativeGOJSShapeType) || 'Rectangle';
        return _this;
    }
    /**
     * add a port to the shape
     * @param port port to link nodes
     */
    Column.prototype.addPort = function (port) {
        this.ports.push(port);
    };
    /**
    * Create a node from the GoJS library
    * @return a GO.JS object
    */
    Column.prototype.generateView = function () {
        var _a, _b;
        var portConfig = this.ports.map(function (p) { return p.getPort(); });
        var rows = new Array();
        for (var i = 1; i < this.rows; ++i) {
            rows.push(this.createNewRow(i, this.rowsInfo[i], this.editable, this.fontColor));
        }
        var object = $(go.Node, "Table", [new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), { locationSpot: go.Spot.Center }], $(go.Panel, "Auto", $(go.Shape, this.shapeType, { fill: ((_a = this === null || this === void 0 ? void 0 : this.shape) === null || _a === void 0 ? void 0 : _a.fill) || "gray", stroke: "black", strokeWidth: ((_b = this === null || this === void 0 ? void 0 : this.shape) === null || _b === void 0 ? void 0 : _b.strokeWidth) || 1 }), $(go.Panel, "Table", { defaultRowSeparatorStroke: "black" }, $(go.TextBlock, {
            row: 0, columnSpan: 2, margin: 3, alignment: go.Spot.Center,
            font: "bold 12pt sans-serif",
            isMultiline: false, editable: true,
            text: "Class"
        }, new go.Binding("text", "name").makeTwoWay()), rows)), portConfig);
        return object;
    };
    /**
     * Create a new row for the column
     * @param rowIndex index of the row
     * @param innerText text displayed in the row
     * @param editable make the shape text editable
     * @param fontColor shape font color
     * @returns
     */
    Column.prototype.createNewRow = function (rowIndex, innerText, editable, fontColor) {
        var row = $(go.Panel, "Vertical", new go.Binding("itemArray", "properties"), {
            row: rowIndex, margin: 3, stretch: go.GraphObject.Fill,
            defaultAlignment: go.Spot.Left, background: "transparent"
        }, $(go.TextBlock, {
            font: "bold 11pt Lato, Helvetica, Arial, sans-serif",
            stroke: fontColor
        }, {
            margin: 5,
            maxSize: new go.Size(160, NaN),
            wrap: go.TextBlock.WrapFit,
            editable: editable,
            text: innerText
        }, new go.Binding("text", innerText).makeTwoWay()));
        return row;
    };
    return Column;
}(Shape_1.Shape));
exports.Column = Column;
