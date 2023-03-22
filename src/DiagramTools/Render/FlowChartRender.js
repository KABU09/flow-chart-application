"use strict";
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
exports.FlowChartRender = void 0;
var go = __importStar(require("../../../node_modules/gojs/release/go"));
var $ = go.GraphObject.make;
/**
 * Controller that render the shapes in the canvas.
 * Manages the interaction logic and events
 * Defines the rules between nodes and links
 */
var FlowChartRender = /** @class */ (function () {
    function FlowChartRender() {
    }
    /**
     * render elements to diagram
     * @param shapes array of shapes
     * @param links array of links
     * @param rules rules to connect nodes
     * @returns
     */
    FlowChartRender.prototype.renderElements = function (shapes, links, rules) {
        var myDiagram = $(go.Diagram, "myDiagramDiv", {
            "undoManager.isEnabled": true,
        });
        myDiagram.model = $(go.GraphLinksModel, { linkFromPortIdProperty: "fromPort",
            linkToPortIdProperty: "toPort" });
        myDiagram.addDiagramListener("LinkDrawn", function (e) {
            var node = e.subject.fromNode;
            if (node.data.category === "Conditional") {
                var linksInto = node.findLinksOutOf();
                if (linksInto.count === 1) {
                    e.subject.findObject("Label").text = "Yes";
                }
                else {
                    e.subject.findObject("Label").text = (linksInto.first().findObject("Label").text === "Yes") ? "No" : "Yes";
                }
            }
        });
        for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
            var link = links_1[_i];
            if (link.title) {
                myDiagram.linkTemplateMap.add(link.title, link.generateView());
            }
        }
        myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
        myDiagram.toolManager.relinkingTool.temporaryLink.routing = go.Link.Orthogonal;
        function validateLink(fromnode, fromport, tonode, toport) {
            var _a, _b;
            var from = (_a = fromnode === null || fromnode === void 0 ? void 0 : fromnode.data) === null || _a === void 0 ? void 0 : _a.category;
            var to = (_b = tonode === null || tonode === void 0 ? void 0 : tonode.data) === null || _b === void 0 ? void 0 : _b.category;
            var linkType = jQuery("#switchLine").val();
            if (!rules) {
                return false;
            }
            if (!rules[from]) {
                return false;
            }
            if (!rules[from]["can"]) {
                return false;
            }
            if (!rules[from]["can"][to]) {
                return false;
            }
            if (!rules[from]["can"][to]["link"]) {
                return false;
            }
            var values = rules[from]["can"][to]["link"];
            if (!values.includes(linkType)) {
                return false;
            }
            var value = values.find(function (item) { return item === linkType; });
            if (!value) {
                return false;
            }
            myDiagram.toolManager.linkingTool.archetypeLinkData = { category: value };
            return true;
        }
        myDiagram.toolManager.linkingTool.linkValidation = validateLink;
        myDiagram.toolManager.relinkingTool.linkValidation = validateLink;
        for (var _a = 0, shapes_1 = shapes; _a < shapes_1.length; _a++) {
            var shape = shapes_1[_a];
            if (shape) {
                myDiagram.nodeTemplateMap.add((shape === null || shape === void 0 ? void 0 : shape.title) || 'Figure', shape.generateView());
            }
        }
        var categories = [];
        for (var _b = 0, shapes_2 = shapes; _b < shapes_2.length; _b++) {
            var guiElement = shapes_2[_b];
            var shape = guiElement;
            categories.push({
                category: shape === null || shape === void 0 ? void 0 : shape.title,
                text: shape === null || shape === void 0 ? void 0 : shape.innerText,
            });
        }
        var pallete = $(go.Palette, "myDiagramDash", {
            nodeTemplateMap: myDiagram.nodeTemplateMap,
            model: new go.GraphLinksModel(categories),
        });
        return myDiagram;
    };
    return FlowChartRender;
}());
exports.FlowChartRender = FlowChartRender;
