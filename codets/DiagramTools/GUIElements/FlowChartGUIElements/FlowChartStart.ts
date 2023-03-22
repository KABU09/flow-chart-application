import { Oval } from "../GenericGUIElements/Oval";
import { Rhomboid } from "../GenericGUIElements/Rhomboid";
import { Port, Position } from "../Port";

/**
 * Start for FlowChart diagram
 */
export class FlowChartStart extends Oval{
    constructor(){
        super("Start", "Start", "#E058DC", false, "#F8F8F8");
        this.addPort(new Port(Position.UP, true, false));
        this.addPort(new Port(Position.DOWN, true, false));
        this.addPort(new Port(Position.LEFT, true, false));
        this.addPort(new Port(Position.RIGHT, true, false));
    }
}