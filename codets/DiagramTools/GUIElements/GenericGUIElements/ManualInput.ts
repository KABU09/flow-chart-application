import { Shape } from "../Shape";
import { NodeElement } from '../NodeElement';
import { Port } from "../Port";

import * as go from 'gojs'
const $ = go.GraphObject.make

/**
 * Input shape
 */
export class ManualInput extends Shape implements NodeElement{
    ports: Port[];
    /**
     * @param title shape title
     * @param innerText text displayed in the shape
     * @param fill shape color
     * @param editable makes the the shape text editable
     * @param fontColor shape font color
     * @return
     */
    constructor(title:string, innerText:string, fill:string, editable:boolean, fontColor:string){
        super(title, innerText, fill, editable, fontColor, "ManualInput");
        this.strokeWidth = 1;
        this.ports = new Array<Port>();
    }

    /**
     * add a port to the shape
     * @param port port to link nodes
     */
    addPort(port: Port): void {
        this.ports.push(port);
    }

    /**
    * Create a node from the GoJS library
    * @return a GO.JS object
    */
    generateView():any{
        const portConfig: any = this.ports.map(p => p.getPort());
        go.Shape.defineFigureGenerator("ManualInput", function (shape, w, h) {
            var geo = new go.Geometry();
            var fig = new go.PathFigure(w, 0, true);
            geo.add(fig);

            fig.add(new go.PathSegment(go.PathSegment.Line, w, h));
            fig.add(new go.PathSegment(go.PathSegment.Line, 0, h));
            fig.add(new go.PathSegment(go.PathSegment.Line, 0, .25 * h).close());
            geo.spot1 = new go.Spot(0, .25);
            geo.spot2 = go.Spot.BottomRight;
            return geo;
        });
        const object = $(go.Node, "Table", [new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), { locationSpot: go.Spot.Center }],
            $(go.Panel, "Auto",
                $(go.Shape, "ManualInput",
                    { fill: this.fill, stroke: "#00A9C9", strokeWidth: this.strokeWidth },
                    new go.Binding("figure", "figure")),
                $(go.TextBlock, {
                    font: "bold 11pt Lato, Helvetica, Arial, sans-serif",
                    stroke: this.fontColor
                },
                    {
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: this.editable
                    },
                    new go.Binding("text").makeTwoWay())
            ),
            portConfig
        )
        return object;
    }
}