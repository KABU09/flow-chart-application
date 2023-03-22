import { Shape } from "../Shape";
import { ArrowHead } from "./ArrowHead";
import { ArrowBody } from "./ArrowBody";

import * as go from 'gojs'
const $ = go.GraphObject.make

/**
 * Line
 */
export class Line extends Shape{

    public fromArrowHead:ArrowHead;
    public toArrowHead:ArrowHead;
    public arrowBody:ArrowBody;
    /**
     * @param title shape title
     * @param innerText text displayed in the label
     * @param fill label color
     * @param editable makes the the shape text editable
     * @param fontColor shape font color
     * @param fromArrowHead 
     * @param toArrowHead 
     * @param arrowBody link to connect nodes
     * @param showLabel to display the label
     */
    constructor(title: string, innerText: string, fill: string, editable: boolean, fontColor: string, fromArrowHead:ArrowHead, toArrowHead:ArrowHead, arrowBody:ArrowBody, public showLabel:boolean = true){ 
        super(title, innerText, fill, editable, fontColor, undefined);
        this.strokeWidth = 1;


        this.fromArrowHead = fromArrowHead;
        if(! this.fromArrowHead){
            this.fromArrowHead = new ArrowHead("","","");
        }

        this.toArrowHead = toArrowHead;
        if(! this.toArrowHead){
            this.toArrowHead = new ArrowHead("","","");
        }

        this.arrowBody = arrowBody;
        if(! this.arrowBody){
            this.arrowBody = new ArrowBody("","","");
        }

    }
    
    /**
    * Create a link from the GoJS library
    * @return a GO.JS object
    */
    generateView():any{

        const link = this.arrowBody.generateView();
        
        const object = $(go.Link,
            {
                routing: go.Link.AvoidsNodes,
                curve: go.Link.JumpOver,
                corner: 5, toShortLength: 4,
                relinkableFrom: true,
                relinkableTo: true,
                reshapable: true,
                resegmentable: true,
                mouseEnter: function (e, link:any) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
                mouseLeave: function (e, link:any) { link.findObject("HIGHLIGHT").stroke = "transparent"; },
                selectionAdorned: false
            },
            new go.Binding("points").makeTwoWay(),
            $(go.Shape,
                { isPanelMain: true, name: "HIGHLIGHT", pathPattern: link }),
            $(go.Shape,
                { isPanelMain: true, pathPattern: link},
                new go.Binding("stroke", "isSelected", function (sel) { return sel ? "dodgerblue" : "transparent"; }).ofObject()),
            /*fromHead,*/
            /*toHead*/
            $(go.Shape,
                { fromArrow: this.fromArrowHead.title, strokeWidth: this.fromArrowHead.strokeWidth, stroke: this.fromArrowHead.fill, fill: this.fromArrowHead.fill}),
            $(go.Shape,
                { toArrow: this.toArrowHead.title, strokeWidth: this.toArrowHead.strokeWidth, stroke: this.toArrowHead.fill, fill: this.toArrowHead.fill }),
            $(go.Panel, "Auto",
                { visible: this.showLabel, name: "LABEL", segmentIndex: 2, segmentFraction: 0.5 },
                new go.Binding("visible", "visible").makeTwoWay(),
                $(go.Shape, "RoundedRectangle",
                    { fill: this.fill, strokeWidth: 0 }),
                $(go.TextBlock, "",
                    {
                        name: "Label",
                        textAlign: "center",
                        font: "6pt helvetica, arial, sans-serif",
                        stroke:  this.fontColor,
                        editable: this.editable,
                        text: this.innerText
                    },
                    new go.Binding("text").makeTwoWay())
            )
        );

        return object;
    }
}