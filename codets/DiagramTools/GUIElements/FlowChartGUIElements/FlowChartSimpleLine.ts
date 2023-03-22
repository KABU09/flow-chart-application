import { ArrowHead } from '../GenericGUIElements/ArrowHead';
import { ArrowBody } from '../GenericGUIElements/ArrowBody';
import { Line } from '../GenericGUIElements/Line';

/**
 * Line for FlowChart diagram
 */
export class FlowChartSimpleLine extends Line{
    constructor(){
        const fromHead = new ArrowHead("", "","", false);
        const toHead = new ArrowHead("Directed", "F1 m 0,0 l 8,4 -8,4 2,-4 z");
        const body = new ArrowBody("","M0 0 L1 0");
        super("simpleLine", "", "#DFE9DF", false, "#000000", fromHead, toHead, body);
    }
}