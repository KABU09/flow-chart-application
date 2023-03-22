import { Port, Position } from "../Port";
import { TextBlock } from "../GenericGUIElements/TextBlock";

/**
 * Comment for FlowChart diagram
 */
export class FlowChartComment extends TextBlock{
    ports: Port[];
    constructor(){
        super("Comment", "Some comment", "#e68d19", true, "#F8F8F8")
        this.ports = new Array<Port>()
    }
}