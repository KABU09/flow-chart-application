import { Port, Position } from "../Port";
import { Doc } from "../GenericGUIElements/Doc";

/**
 * Output for FlowChart diagram
 */
export class FlowChartOutput extends Doc{
    ports: Port[];
    constructor(){
        super("Output", "print 'message'", "#7708cc", true, "#F8F8F8")
        this.ports = new Array<Port>();
        this.addPort(new Port(Position.UP, true, true));
        this.addPort(new Port(Position.LEFT, true, true));
        this.addPort(new Port(Position.RIGHT, true, true));
        this.addPort(new Port(Position.DOWN, true, true));
    }
}