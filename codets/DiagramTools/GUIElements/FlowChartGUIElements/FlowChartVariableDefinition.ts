import { Rhomboid } from "../GenericGUIElements/Rhomboid";
import { Port, Position } from "../Port";

/**
 * Variable/definition for FlowChart diagram
 */
export class FlowChartVariableDefinition extends Rhomboid{
    constructor(){
        super("Variable", "x <- value", "#1b8061", true, "#F8F8F8");

        this.addPort(new Port(Position.UP, true, true));
        this.addPort(new Port(Position.DOWN, true, true));
        this.addPort(new Port(Position.LEFT, true, true));
        this.addPort(new Port(Position.RIGHT, true, true));
    }
}