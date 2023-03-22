import * as go from 'gojs'
import { NodeElement } from '../NodeElement';
import { Port } from '../Port';
import { Shape } from '../Shape';
const $ = go.GraphObject.make

/**
 * Class to generate node from an image
 */
export class Picture  extends Shape implements NodeElement{

    ports: Port[];

    
     /**
     * @param title shape title
     * @param width shape width
     * @param height shape height
     * @param path file path used for the shape
     * @param innerText text displayed in the shape
     * @param fill shape color
     * @param editable makes the the shape text editable
     * @param fontColor shape font color
     * @return
     */
    constructor(public title:string, public width:number, public height:number, public path:string, public innerText:string, public editable:boolean, fontColor:string ){
        super(title, innerText, "", editable, fontColor, undefined);
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
        const object = $(go.Node, "Table", [new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), { locationSpot: go.Spot.Center }],
            $(go.Panel, "Auto",
                $(go.Panel,
                    $(go.Picture, { source: this.path, width: this.width, height: this.height})
                ),
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