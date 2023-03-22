import * as go from 'gojs'

const $ = go.GraphObject.make
import { Shape } from '../Shape';

/**
 * Shape to display text
 */
export class TextBlock extends Shape {
    public editable: boolean;

    /**
     * @param title shape title
     * @param innerText text displayed in the shape
     * @param fill shape color
     * @param editable makes the the shape text editable
     * @param fontColor shape font color
     * @return
     */
    constructor(title:string, innerText:string, fill:string, editable:boolean, fontColor:string){
        super(title, innerText, fill, editable, fontColor, "File");
        this.editable = true;
        this.strokeWidth = 3;
    }
    
    /**
    * Create a node from the GoJS library
    * @return a GO.JS object
    */
    generateView(): any {
        go.Shape.defineFigureGenerator("File", function (shape, w, h) {
            var geo = new go.Geometry();
            var fig = new go.PathFigure(0, 0, true);
            geo.add(fig);
            fig.add(new go.PathSegment(go.PathSegment.Line, .75 * w, 0));
            fig.add(new go.PathSegment(go.PathSegment.Line, w, .25 * h));
            fig.add(new go.PathSegment(go.PathSegment.Line, w, h));
            fig.add(new go.PathSegment(go.PathSegment.Line, 0, h).close());
            var fig2 = new go.PathFigure(.75 * w, 0, false);
            geo.add(fig2);
            fig2.add(new go.PathSegment(go.PathSegment.Line, .75 * w, .25 * h));
            fig2.add(new go.PathSegment(go.PathSegment.Line, w, .25 * h));
            geo.spot1 = new go.Spot(0, .25);
            geo.spot2 = go.Spot.BottomRight;
            return geo;
        });

        const object: any = $(go.Node, "Auto", [new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), {locationSpot: go.Spot.Center}],
            $(go.Shape, "File",
                { fill: this.fill, stroke: "#37484d", strokeWidth: this.strokeWidth }),
            $(go.TextBlock, {
                font: "bold 11pt Lato, Helvetica, Arial, sans-serif",
                stroke: this.fontColor
            },
                {
                    margin: 8,
                    maxSize: new go.Size(200, NaN),
                    wrap: go.TextBlock.WrapFit,
                    textAlign: "center",
                    editable: this.editable
                },
                new go.Binding("text").makeTwoWay())
        );
        return object;
    }
}