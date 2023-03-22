import { GUIElement } from "../GUIElement";

import * as go from 'gojs'
const $ = go.GraphObject.make

/**
 * Body of line
 */
export class ArrowBody implements GUIElement{
    title: string | undefined;
    svgPath:string
    fill:string
    strokeWidth: number
    /**
     * 
     * @param title title
     * @param svgPath  svg path atribute. Custom svgs are allowed
     * @param fill link fill color
     * @param strokeWidth link strokewidth
     */
    constructor(title:string, svgPath:string, fill:string = "#000000", strokeWidth:number = 1){
        this.title = title;
        this.svgPath = svgPath;
        this.strokeWidth = strokeWidth;
        this.fill = fill;
    }
    /**
     * Generates a Go.JS line
     * @returns 
     */
    generateView() {
        const link = $(go.Shape, {
            geometryString: (this.svgPath) ? this.svgPath : "M0 0 L1 0", fill: "transparent", stroke: this.fill, strokeWidth: this.strokeWidth, strokeCap: "square"});
        return link;
    }

}