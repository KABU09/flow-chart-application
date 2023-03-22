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
exports.Picture = void 0;
var go = __importStar(require("gojs"));
var Shape_1 = require("../Shape");
var $ = go.GraphObject.make;
/**
 * Class to generate node from an image
 */
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    /**
    * @param title shape title
    * @param width shape width
    * @param height shape height
    * @param path file path used for the shape
    * @param innerText text displayed in the shape
    * @param fill shape color
    * @param editable makes the the shape text editable
    * @param fontColor shape font color
    * @return
    */
    function Picture(title, width, height, path, innerText, editable, fontColor) {
        var _this = _super.call(this, title, innerText, "", editable, fontColor, undefined) || this;
        _this.title = title;
        _this.width = width;
        _this.height = height;
        _this.path = path;
        _this.innerText = innerText;
        _this.editable = editable;
        _this.ports = new Array();
        return _this;
    }
    /**
     * add a port to the shape
     * @param port port to link nodes
     */
    Picture.prototype.addPort = function (port) {
        this.ports.push(port);
    };
    /**
    * Create a node from the GoJS library
    * @return a GO.JS object
    */
    Picture.prototype.generateView = function () {
        var portConfig = this.ports.map(function (p) { return p.getPort(); });
        var object = $(go.Node, "Table", [new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), { locationSpot: go.Spot.Center }], $(go.Panel, "Auto", $(go.Panel, $(go.Picture, { source: this.path, width: this.width, height: this.height })), $(go.TextBlock, {
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
    return Picture;
}(Shape_1.Shape));
exports.Picture = Picture;
