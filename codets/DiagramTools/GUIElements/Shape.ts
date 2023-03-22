import { GUIElement } from './GUIElement';

/**
 * Abstract class to define a shape
 */
export abstract class Shape implements GUIElement{
    public strokeWidth:number | undefined;

    /**
     * 
     * @param title shape title
     * @param innerText displayed text
     * @param fill shape color
     * @param editable determines if the text is editable
     * @param fontColor fontcolor of the shape
     * @param nativeGOJSShapeType name given from Go.JS to the shape
     */
    constructor(public title:string, public innerText:string, public fill:string, public editable:boolean, public fontColor:string, public nativeGOJSShapeType:string|undefined){}

    generateView():any{
        throw new Error("Method not implemented.");
    }

}