import { Diamond } from "../GenericGUIElements/Diamond";
import { Port, Position } from "../Port";

/**
 * Conditional for FlowChart diagram
 */
export class FlowChartConditional extends Diamond{
    constructor(){
        super("Conditional", "Condition", "#5794FA", true, "#F8F8F8");
        this.addPort(new Port(Position.UP, false, true));
        this.addPort(new Port(Position.LEFT, true, false));
        this.addPort(new Port(Position.RIGHT, true, false));
    }
}