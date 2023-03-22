import { Shape } from "../Shape";
import { NodeElement } from '../NodeElement';
import { Port } from "../Port";

import * as go from 'gojs'

const $ = go.GraphObject.make

/**
 * Rhomboid shape
 */
export class Rhomboid extends Shape implements NodeElement{
    ports: Port[];

     /**
     * @param title shape title
     * @param text text displayed in the shape
     * @param fill shape color
     * @param editable makes the the shape text editable
     * @param fontColor shape font color
     * @return
     */
    constructor(title:string, text:string, fill:string, editable:boolean, fontColor:string){
        super(title, text, fill, editable, fontColor, "Parallelogram1");
        this.strokeWidth = 3;
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

        go.Shape.defineFigureGenerator("Parallelogram1", function (shape, w, h) {
            var param1 = shape ? shape.parameter1 : NaN;
            if (isNaN(param1)) param1 = 0.1;
            else if (param1 < -1) param1 = -1;
            else if (param1 > 1) param1 = 1;
            var indent = Math.abs(param1) * w;


            if (param1 === 0) {
                var geo = new go.Geometry(go.Geometry.Rectangle);
                geo.startX = 0;
                geo.startY = 0;
                geo.endX = w;
                geo.endY = h;
                return geo;
            } else {
                var geo = new go.Geometry();
                if (param1 > 0) {
                    geo.add(new go.PathFigure(indent, 0)
                        .add(new go.PathSegment(go.PathSegment.Line, w, 0))
                        .add(new go.PathSegment(go.PathSegment.Line, w - indent, h))
                        .add(new go.PathSegment(go.PathSegment.Line, 0, h).close()));
                } else {
                    geo.add(new go.PathFigure(0, 0)
                        .add(new go.PathSegment(go.PathSegment.Line, w - indent, 0))
                        .add(new go.PathSegment(go.PathSegment.Line, w, h))
                        .add(new go.PathSegment(go.PathSegment.Line, indent, h).close()));
                }
                if (indent < w / 2) {
                    geo.setSpots(indent / w, 0, (w - indent) / w, 1);
                }
                return geo;
            }
        });
        go.Shape.defineFigureGenerator("Input", "Parallelogram1");

        const object = $(go.Node, "Table", [new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), { locationSpot: go.Spot.Center }],
            $(go.Panel, "Auto",
                $(go.Shape, "Input",
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