import { GUIElement } from "../GUIElement";
import * as go from 'gojs'
const $ = go.GraphObject.make

/**
 * Head of line
 */
export class ArrowHead{
    title: string | undefined;

    /**
     * 
     * @param title arrow title
     * @param svgPath svg path atribute. Custom svgs are allowed
     * @param fill arrow fill color
     * @param toHead it determines if an arrow is at the begining or at the end of the link
     * @param strokeWidth arrow strokewidth
     */
    constructor(title: string, public svgPath: string, public fill: string = "#000000", public toHead: boolean = true, public strokeWidth = 1){
        this.title = title;

        if (this.title && this.svgPath) {
            go.Shape.defineArrowheadGeometry(this.title, this.svgPath);
        }
        else {
            this.title = "";
        }
    }
}