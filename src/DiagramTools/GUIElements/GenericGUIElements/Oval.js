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
exports.Oval = void 0;
var Shape_1 = require("../Shape");
var go = __importStar(require("gojs"));
var $ = go.GraphObject.make;
/**
 * Oval shape
 */
var Oval = /** @class */ (function (_super) {
    __extends(Oval, _super);
    /**
     * @param title shape title
     * @param innerText text displayed in the shape
     * @param fill shape color
     * @param editable makes the the shape text editable
     * @param fontColor shape font color
     * @return
     */
    function Oval(title, innerText, fill, editable, fontColor) {
        var _this = _super.call(this, title, innerText, fill, editable, fontColor, "Terminator") || this;
        _this.strokeWidth = 1;
        _this.ports = new Array();
        return _this;
    }
    /**
     * add a port to the shape
     * @param port port to link nodes
     */
    Oval.prototype.addPort = function (port) {
        this.ports.push(port);
    };
    /**
    * Create a node from the GoJS library
    * @return a GO.JS object
    */
    Oval.prototype.generateView = function () {
        go.Shape.defineFigureGenerator("Terminator", function (shape, w, h) {
            var geo = new go.Geometry();
            var fig = new go.PathFigure(.25 * w, 0, true);
            geo.add(fig);
            fig.add(new go.PathSegment(go.PathSegment.Arc, 270, 180, .75 * w, 0.5 * h, .25 * w, .5 * h));
            fig.add(new go.PathSegment(go.PathSegment.Arc, 90, 180, .25 * w, 0.5 * h, .25 * w, .5 * h));
            geo.spot1 = new go.Spot(.23, 0);
            geo.spot2 = new go.Spot(.77, 1);
            return geo;
        });
        var portConfig = this.ports.map(function (p) { return p.getPort(); });
        var object = $(go.Node, "Table", [new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), { locationSpot: go.Spot.Center }], $(go.Panel, "Auto", $(go.Shape, "Terminator", { fill: this.fill, stroke: "#00A9C9", strokeWidth: this.strokeWidth }, new go.Binding("figure", "figure")), $(go.TextBlock, {
            font: "bold 11pt Lato, Helvetica, Arial, sans-serif",
            stroke: this.fontColor
        }, {
            margin: 8,
            maxSize: new go.Size(160, NaN),
            wrap: go.TextBlock.WrapFit,
            editable: this.editable
        }, new go.Binding("text").makeTwoWay())), portConfig);
        return object;
    };
    return Oval;
}(Shape_1.Shape));
exports.Oval = Oval;
