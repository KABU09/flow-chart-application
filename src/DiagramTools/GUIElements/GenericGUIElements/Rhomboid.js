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
exports.Rhomboid = void 0;
var Shape_1 = require("../Shape");
var go = __importStar(require("gojs"));
var $ = go.GraphObject.make;
/**
 * Rhomboid shape
 */
var Rhomboid = /** @class */ (function (_super) {
    __extends(Rhomboid, _super);
    /**
    * @param title shape title
    * @param text text displayed in the shape
    * @param fill shape color
    * @param editable makes the the shape text editable
    * @param fontColor shape font color
    * @return
    */
    function Rhomboid(title, text, fill, editable, fontColor) {
        var _this = _super.call(this, title, text, fill, editable, fontColor, "Parallelogram1") || this;
        _this.strokeWidth = 3;
        _this.ports = new Array();
        return _this;
    }
    /**
     * add a port to the shape
     * @param port port to link nodes
     */
    Rhomboid.prototype.addPort = function (port) {
        this.ports.push(port);
    };
    /**
     * Create a node from the GoJS library
     * @return a GO.JS object
     */
    Rhomboid.prototype.generateView = function () {
        var portConfig = this.ports.map(function (p) { return p.getPort(); });
        go.Shape.defineFigureGenerator("Parallelogram1", function (shape, w, h) {
            var param1 = shape ? shape.parameter1 : NaN;
            if (isNaN(param1))
                param1 = 0.1;
            else if (param1 < -1)
                param1 = -1;
            else if (param1 > 1)
                param1 = 1;
            var indent = Math.abs(param1) * w;
            if (param1 === 0) {
                var geo = new go.Geometry(go.Geometry.Rectangle);
                geo.startX = 0;
                geo.startY = 0;
                geo.endX = w;
                geo.endY = h;
                return geo;
            }
            else {
                var geo = new go.Geometry();
                if (param1 > 0) {
                    geo.add(new go.PathFigure(indent, 0)
                        .add(new go.PathSegment(go.PathSegment.Line, w, 0))
                        .add(new go.PathSegment(go.PathSegment.Line, w - indent, h))
                        .add(new go.PathSegment(go.PathSegment.Line, 0, h).close()));
                }
                else { // param1 < 0
                    geo.add(new go.PathFigure(0, 0)
                        .add(new go.PathSegment(go.PathSegment.Line, w - indent, 0))
                        .add(new go.PathSegment(go.PathSegment.Line, w, h))
                        .add(new go.PathSegment(go.PathSegment.Line, indent, h).close()));
                }
                if (indent < w / 2) {
                    geo.setSpots(indent / w, 0, (w - indent) / w, 1);
                }
                return geo;
            }
        });
        go.Shape.defineFigureGenerator("Input", "Parallelogram1");
        var object = $(go.Node, "Table", [new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), { locationSpot: go.Spot.Center }], $(go.Panel, "Auto", $(go.Shape, "Input", { fill: this.fill, stroke: "#00A9C9", strokeWidth: this.strokeWidth }, new go.Binding("figure", "figure")), $(go.TextBlock, {
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
    return Rhomboid;
}(Shape_1.Shape));
exports.Rhomboid = Rhomboid;
