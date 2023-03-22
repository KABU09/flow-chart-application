"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowChartFactory = exports.FlowChartElement = void 0;
var Line_1 = require("../GUIElements/GenericGUIElements/Line");
var FlowChartOutput_1 = require("../GUIElements/FlowChartGUIElements/FlowChartOutput");
var FlowChartInput_1 = require("../GUIElements/FlowChartGUIElements/FlowChartInput");
var FlowChartStep_1 = require("../GUIElements/FlowChartGUIElements/FlowChartStep");
var FlowChartVariableDefinition_1 = require("../GUIElements/FlowChartGUIElements/FlowChartVariableDefinition");
var FlowChartStart_1 = require("../GUIElements/FlowChartGUIElements/FlowChartStart");
var FlowChartStop_1 = require("../GUIElements/FlowChartGUIElements/FlowChartStop");
var FlowChartConditional_1 = require("../GUIElements/FlowChartGUIElements/FlowChartConditional");
var FlowChartSimpleLine_1 = require("../GUIElements/FlowChartGUIElements/FlowChartSimpleLine");
var FlowChartComment_1 = require("../GUIElements/FlowChartGUIElements/FlowChartComment");
var ArrowHead_1 = require("../GUIElements/GenericGUIElements/ArrowHead");
var ArrowBody_1 = require("../GUIElements/GenericGUIElements/ArrowBody");
var FlowChartElement;
(function (FlowChartElement) {
    FlowChartElement[FlowChartElement["START"] = 0] = "START";
    FlowChartElement[FlowChartElement["STOP"] = 1] = "STOP";
    FlowChartElement[FlowChartElement["VARIABLE_DEFINITION"] = 2] = "VARIABLE_DEFINITION";
    FlowChartElement[FlowChartElement["STEP"] = 3] = "STEP";
    FlowChartElement[FlowChartElement["CONDITIONAL"] = 4] = "CONDITIONAL";
    FlowChartElement[FlowChartElement["COMMENT"] = 5] = "COMMENT";
    FlowChartElement[FlowChartElement["LINE"] = 6] = "LINE";
    FlowChartElement[FlowChartElement["INPUT"] = 7] = "INPUT";
    FlowChartElement[FlowChartElement["OUTPUT"] = 8] = "OUTPUT";
    FlowChartElement[FlowChartElement["LINE2"] = 9] = "LINE2";
    FlowChartElement[FlowChartElement["SIMPLE_LINE"] = 10] = "SIMPLE_LINE";
})(FlowChartElement = exports.FlowChartElement || (exports.FlowChartElement = {}));
/**
 * Defines a factory for the FlowChart diagram
 */
var FlowChartFactory = /** @class */ (function () {
    function FlowChartFactory() {
    }
    /**
     * It creates an object of the Flow Chart Family
     * @param type type of Flow Chart Element to create
     * @returns
     */
    FlowChartFactory.prototype.createElement = function (type) {
        switch (type) {
            case FlowChartElement.LINE:
                //return new Line("line", "", "#fc032c", true /*Recordar cambiar a false para produccion*/, "#000000", { toHeadName: "Dirigida", toHeadGeo: "m 0, 0 l 8, 4 -8, 4", fromHeadName: "Double Arrow", fromHeadGeo: "F1 m 0,4 l 2,-4 0,2 4,0 0,-2 2,4 -2,4 0,-2 -4,0 0,2 -2,-4 z",bodyGeo: "m0.93538,4.24728l3.10557,0l0.95964,-2.93677l0.95964,2.93677l3.10557,0l-2.51245,1.815l0.95969,2.93677l-2.51245,-1.81505l-2.51245,1.81505l0.95969,-2.93677l-2.51245,-1.815z"});
                var fromHead = new ArrowHead_1.ArrowHead("", "", "#0EEA0D", false);
                var toHead = new ArrowHead_1.ArrowHead("Standard", "F1 m 8,4 l -4,-4 -4,0 0,8 4,0 4,-4 z", "#0EEA0D");
                var body = new ArrowBody_1.ArrowBody("", "M0 0 M3 0 L6 0", "#0EEA0D");
                return new Line_1.Line("line", "", "#C0EAED", true /*Recordar cambiar a false para produccion*/, "#000000", fromHead, toHead, body);
            case FlowChartElement.LINE2:
                var from = new ArrowHead_1.ArrowHead("forkHead", "m 0,4 l 8,0 m -8,0 l 8,-4 m -8,4 l 8,4", "#27DAE6", false);
                var to = new ArrowHead_1.ArrowHead("circleHead", "F1 m 8,4 b 0 360 -4 0 4 z", "#27DAE6");
                var bodyLine = new ArrowBody_1.ArrowBody("", "M0 0 M3 0 L6 0", "#BB40DB");
                return new Line_1.Line("lineTest", "", "#4903fc", false, "#000000", from, to, bodyLine, false);
            case FlowChartElement.SIMPLE_LINE:
                return new FlowChartSimpleLine_1.FlowChartSimpleLine();
            case FlowChartElement.COMMENT:
                return new FlowChartComment_1.FlowChartComment();
            case FlowChartElement.OUTPUT:
                return new FlowChartOutput_1.FlowChartOutput();
            case FlowChartElement.INPUT:
                return new FlowChartInput_1.FlowChartInput();
            case FlowChartElement.STEP:
                return new FlowChartStep_1.FlowChartStep();
            case FlowChartElement.VARIABLE_DEFINITION:
                return new FlowChartVariableDefinition_1.FlowChartVariableDefinition();
            case FlowChartElement.START:
                return new FlowChartStart_1.FlowChartStart();
            case FlowChartElement.STOP:
                return new FlowChartStop_1.FlowChartStop();
            case FlowChartElement.CONDITIONAL:
                return new FlowChartConditional_1.FlowChartConditional();
            default:
                throw new Error("You must specify a valid FlowChartElement");
        }
    };
    /**
     * Build the flow chart links
     * @returns an array of GUIElements (elements that can be rendered)
     */
    FlowChartFactory.prototype.buildLinks = function () {
        var links = new Array();
        var link = this.createElement(FlowChartElement.SIMPLE_LINE);
        links.push(link);
        links.push(this.createElement(FlowChartElement.LINE));
        links.push(this.createElement(FlowChartElement.LINE2));
        return links;
    };
    /**
     * build de flow chart shapes
     * @returns an array of GUIElements (elements that can be rendered)
     */
    FlowChartFactory.prototype.buildShapes = function () {
        var comment = this.createElement(FlowChartElement.COMMENT);
        var action = this.createElement(FlowChartElement.STEP);
        var start = this.createElement(FlowChartElement.START);
        var stop = this.createElement(FlowChartElement.STOP);
        var condition = this.createElement(FlowChartElement.CONDITIONAL);
        var definition = this.createElement(FlowChartElement.VARIABLE_DEFINITION);
        var input = this.createElement(FlowChartElement.INPUT);
        var output = this.createElement(FlowChartElement.OUTPUT);
        var shapes = new Array();
        shapes.push(comment, action, start, stop, condition, definition, input, output);
        return shapes;
    };
    return FlowChartFactory;
}());
exports.FlowChartFactory = FlowChartFactory;
