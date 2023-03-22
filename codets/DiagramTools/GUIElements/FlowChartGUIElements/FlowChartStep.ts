import { Port, Position } from "../Port";
import { Doc } from "../GenericGUIElements/Doc";
import { Rectangle } from '../GenericGUIElements/Rectangle';

/**
 * Step for FlowChart diagram
 */
export class FlowChartStep extends Rectangle{
    ports: Port[];
    constructor(){
        super("Step", "Some Step", "#e68d19", true, "#F8F8F8")
        this.ports = new Array<Port>()
        this.addPort(new Port(Position.UP, true, true,1,1,true));
        this.addPort(new Port(Position.DOWN, true, true, 1, 1, true));
        this.addPort(new Port(Position.LEFT, true, true, 1, 1, true));
        this.addPort(new Port(Position.RIGHT, true, true, 1, 1, true));
    }
}