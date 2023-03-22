import { GUIElementsFactory } from "./GUIElementsAbstractFactory";
import { TextBlock } from "../GUIElements/GenericGUIElements/TextBlock";
import { Shape } from "../GUIElements/Shape";
import { Line } from "../GUIElements/GenericGUIElements/Line";
import { FlowChartOutput } from "../GUIElements/FlowChartGUIElements/FlowChartOutput";
import { FlowChartInput } from "../GUIElements/FlowChartGUIElements/FlowChartInput";
import { FlowChartStep } from '../GUIElements/FlowChartGUIElements/FlowChartStep';
import { FlowChartVariableDefinition } from '../GUIElements/FlowChartGUIElements/FlowChartVariableDefinition';
import { FlowChartStart } from "../GUIElements/FlowChartGUIElements/FlowChartStart";
import { FlowChartStop } from "../GUIElements/FlowChartGUIElements/FlowChartStop";
import { FlowChartConditional } from '../GUIElements/FlowChartGUIElements/FlowChartConditional';
import { FlowChartSimpleLine } from "../GUIElements/FlowChartGUIElements/FlowChartSimpleLine";
import { FlowChartComment } from "../GUIElements/FlowChartGUIElements/FlowChartComment";

import { ArrowHead } from "../GUIElements/GenericGUIElements/ArrowHead";
import { ArrowBody } from "../GUIElements/GenericGUIElements/ArrowBody";
import { GUIElement } from '../GUIElements/GUIElement';

export enum FlowChartElement {
    START, STOP, VARIABLE_DEFINITION, STEP, CONDITIONAL, COMMENT, LINE, INPUT, OUTPUT, LINE2, SIMPLE_LINE
}

/**
 * Defines a factory for the FlowChart diagram
 */
export class FlowChartFactory implements GUIElementsFactory {

    /**
     * It creates an object of the Flow Chart Family
     * @param type type of Flow Chart Element to create
     * @returns 
     */
    createElement(type: FlowChartElement): Shape {
        switch (type) {
            case FlowChartElement.LINE:
                const fromHead = new ArrowHead("", "","#0EEA0D", false);
                const toHead = new ArrowHead("Standard", "F1 m 8,4 l -4,-4 -4,0 0,8 4,0 4,-4 z","#0EEA0D");
                
                const body = new ArrowBody("","M0 0 M3 0 L6 0", "#0EEA0D");
                return new Line("line", "", "#C0EAED", true /*Recordar cambiar a false para produccion*/, "#000000", fromHead, toHead, body);
             
            case FlowChartElement.LINE2:
                const from = new ArrowHead("forkHead", "m 0,4 l 8,0 m -8,0 l 8,-4 m -8,4 l 8,4","#27DAE6", false);
                const to = new ArrowHead("circleHead", "F1 m 8,4 b 0 360 -4 0 4 z","#27DAE6");
                
                const bodyLine = new ArrowBody("","M0 0 M3 0 L6 0", "#BB40DB");

                return new Line("lineTest", "", "#4903fc", false, "#000000", from, to, bodyLine, false);
            
            case FlowChartElement.SIMPLE_LINE:
                return new FlowChartSimpleLine();
            
            case FlowChartElement.COMMENT:
                return new FlowChartComment();
           
            case FlowChartElement.OUTPUT:
                return new FlowChartOutput();
    
            case FlowChartElement.INPUT:
                return new FlowChartInput();

            case FlowChartElement.STEP:
                return new FlowChartStep();

            case FlowChartElement.VARIABLE_DEFINITION:
                return new FlowChartVariableDefinition();

            case FlowChartElement.START:
                return new FlowChartStart();
            case FlowChartElement.STOP:
                return new FlowChartStop();

            case FlowChartElement.CONDITIONAL:
                return new FlowChartConditional();

            default:
                throw new Error("You must specify a valid FlowChartElement");
        }
    }

    /**
     * Build the flow chart links
     * @returns an array of GUIElements (elements that can be rendered)
     */
    public buildLinks(): Array<GUIElement> {
        const links: Array<Shape> = new Array<Shape>();
        const link = this.createElement(FlowChartElement.SIMPLE_LINE);
        links.push(link);
        links.push(this.createElement(FlowChartElement.LINE));
        links.push(this.createElement(FlowChartElement.LINE2));
        return links;
    }

    /**
     * build de flow chart shapes
     * @returns an array of GUIElements (elements that can be rendered)
     */
    public buildShapes(): Array<GUIElement> {

        const comment = this.createElement(FlowChartElement.COMMENT);
        const action = this.createElement(FlowChartElement.STEP);
        const start = this.createElement(FlowChartElement.START);
        const stop = this.createElement(FlowChartElement.STOP);
        const condition = this.createElement(FlowChartElement.CONDITIONAL);
        const definition = this.createElement(FlowChartElement.VARIABLE_DEFINITION);
        const input = this.createElement(FlowChartElement.INPUT);
        const output = this.createElement(FlowChartElement.OUTPUT);

        const shapes = new Array<Shape>();

        shapes.push(
            comment,
            action,
            start,
            stop,
            condition,
            definition,
            input,
            output
        )

        return shapes;
    }

}