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
exports.Line = void 0;
var Shape_1 = require("../Shape");
var ArrowHead_1 = require("./ArrowHead");
var ArrowBody_1 = require("./ArrowBody");
var go = __importStar(require("gojs"));
var $ = go.GraphObject.make;
/**
 * Line
 */
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    /**
     * @param title shape title
     * @param innerText text displayed in the label
     * @param fill label color
     * @param editable makes the the shape text editable
     * @param fontColor shape font color
     * @param fromArrowHead
     * @param toArrowHead
     * @param arrowBody link to connect nodes
     * @param showLabel to display the label
     */
    function Line(title, innerText, fill, editable, fontColor, fromArrowHead, toArrowHead, arrowBody, showLabel) {
        if (showLabel === void 0) { showLabel = true; }
        var _this = _super.call(this, title, innerText, fill, editable, fontColor, undefined) || this;
        _this.showLabel = showLabel;
        _this.strokeWidth = 1;
        _this.fromArrowHead = fromArrowHead;
        if (!_this.fromArrowHead) {
            _this.fromArrowHead = new ArrowHead_1.ArrowHead("", "", "");
        }
        _this.toArrowHead = toArrowHead;
        if (!_this.toArrowHead) {
            _this.toArrowHead = new ArrowHead_1.ArrowHead("", "", "");
        }
        _this.arrowBody = arrowBody;
        if (!_this.arrowBody) {
            _this.arrowBody = new ArrowBody_1.ArrowBody("", "", "");
        }
        return _this;
    }
    /**
    * Create a link from the GoJS library
    * @return a GO.JS object
    */
    Line.prototype.generateView = function () {
        var link = this.arrowBody.generateView();
        var object = $(go.Link, {
            routing: go.Link.AvoidsNodes,
            curve: go.Link.JumpOver,
            corner: 5, toShortLength: 4,
            relinkableFrom: true,
            relinkableTo: true,
            reshapable: true,
            resegmentable: true,
            mouseEnter: function (e, link) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
            mouseLeave: function (e, link) { link.findObject("HIGHLIGHT").stroke = "transparent"; },
            selectionAdorned: false
        }, new go.Binding("points").makeTwoWay(), $(go.Shape, { isPanelMain: true, name: "HIGHLIGHT", pathPattern: link }), $(go.Shape, { isPanelMain: true, pathPattern: link }, new go.Binding("stroke", "isSelected", function (sel) { return sel ? "dodgerblue" : "transparent"; }).ofObject()), 
        /*fromHead,*/
        /*toHead*/
        $(go.Shape, { fromArrow: this.fromArrowHead.title, strokeWidth: this.fromArrowHead.strokeWidth, stroke: this.fromArrowHead.fill, fill: this.fromArrowHead.fill }), $(go.Shape, { toArrow: this.toArrowHead.title, strokeWidth: this.toArrowHead.strokeWidth, stroke: this.toArrowHead.fill, fill: this.toArrowHead.fill }), $(go.Panel, "Auto", { visible: this.showLabel, name: "LABEL", segmentIndex: 2, segmentFraction: 0.5 }, new go.Binding("visible", "visible").makeTwoWay(), $(go.Shape, "RoundedRectangle", { fill: this.fill, strokeWidth: 0 }), $(go.TextBlock, "", {
            name: "Label",
            textAlign: "center",
            font: "6pt helvetica, arial, sans-serif",
            stroke: this.fontColor,
            editable: this.editable,
            text: this.innerText
        }, new go.Binding("text").makeTwoWay())));
        return object;
    };
    return Line;
}(Shape_1.Shape));
exports.Line = Line;
