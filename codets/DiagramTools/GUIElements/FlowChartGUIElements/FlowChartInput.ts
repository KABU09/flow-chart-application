import { ManualInput } from '../GenericGUIElements/ManualInput';
import { Port, Position } from '../Port';

/**
 * Input for FlowChart diagram
 */
export class FlowChartInput extends ManualInput{
    constructor(){
        super("Input", "read variable", "#57AAFA", true, "#F8F8F8");
        this.addPort(new Port(Position.UP, true, true));
        this.addPort(new Port(Position.DOWN, true, true));
        this.addPort(new Port(Position.LEFT, true, true));
        this.addPort(new Port(Position.RIGHT, true, true));
    }
}