import { Oval } from "../GenericGUIElements/Oval";
import { Rhomboid } from "../GenericGUIElements/Rhomboid";
import { Port, Position } from "../Port";

/**
 * Stop for FlowChart diagram
 */
export class FlowChartStop extends Oval{
    constructor(){
        super("Stop", "Stop", "#FF3C31", false, "#F8F8F8");
        this.addPort(new Port(Position.UP, false, true));
        this.addPort(new Port(Position.DOWN, false, true));
        this.addPort(new Port(Position.LEFT, false, true));
        this.addPort(new Port(Position.RIGHT, false, true));
    }
}