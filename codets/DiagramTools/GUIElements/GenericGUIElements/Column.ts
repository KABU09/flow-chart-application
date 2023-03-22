import * as go from 'gojs'
import { NodeElement } from '../NodeElement';
import { Port } from '../Port';
import { Shape } from '../Shape';

const $ = go.GraphObject.make

/**
 * Column with n rows
 */
export class Column extends Shape implements NodeElement{

    ports: Port[];
    public rowsInfo:string[];
    public shape:Shape | undefined;
    public shapeType:string;

    
    /**
     * @param title shape title
     * @param innerText array text displayed in rows
     * @param fill shape color
     * @param editable makes the shape text editable
     * @param fontColor shape font color
     * @return
     */
    constructor(title: string, innerText: string[], fill: string, editable: boolean, fontColor: string, public rows:number, shape?:Shape){
        super(title, innerText[0] || "", fill, editable, fontColor, undefined);
        this.rowsInfo = innerText;
        this.strokeWidth = 1;
        this.ports = new Array<Port>();

        this.shape = shape;
        this.shapeType = this.shape?.nativeGOJSShapeType || 'Rectangle';

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
        const rows = new Array<go.Panel>();
        for(let i = 1; i < this.rows; ++i){
            rows.push(this.createNewRow(i,this.rowsInfo[i], this.editable, this.fontColor))
        }

        const object = $(go.Node, "Table", [new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify), { locationSpot: go.Spot.Center }],
            $(go.Panel, "Auto", $(go.Shape, this.shapeType,{ fill: this?.shape?.fill || "gray", stroke: "black", strokeWidth: this?.shape?.strokeWidth || 1 }),
                $(go.Panel, "Table", { defaultRowSeparatorStroke: "black" },
                    $(go.TextBlock,
                        {
                            row: 0, columnSpan: 2, margin: 3, alignment: go.Spot.Center,
                            font: "bold 12pt sans-serif",
                            isMultiline: false, editable: true,
                            text: "Class"
                        },
                        new go.Binding("text", "name").makeTwoWay()),
                        rows
                ))
            ,
            portConfig
        );
        return object;
    }

    /**
     * Create a new row for the column
     * @param rowIndex index of the row
     * @param innerText text displayed in the row
     * @param editable make the shape text editable
     * @param fontColor shape font color
     * @returns 
     */
    private createNewRow(rowIndex:number, innerText:string, editable:boolean, fontColor:string):go.Panel{
        const row = $(go.Panel, "Vertical",
            new go.Binding("itemArray", "properties"),
            {
                row: rowIndex, margin: 3, stretch: go.GraphObject.Fill,
                defaultAlignment: go.Spot.Left, background: "transparent"
            }, $(go.TextBlock, {
                font: "bold 11pt Lato, Helvetica, Arial, sans-serif",
                stroke: fontColor
            },
                {
                    margin: 5,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: editable,
                    text: innerText
                },
                new go.Binding("text", innerText).makeTwoWay())
        )
        return row;
    }
}