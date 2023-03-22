import { GUIElement } from "../GUIElements/GUIElement";

/**
 * Define the behavior of a Render
 */
export interface Render{
    renderElements(shapes: GUIElement[], links: GUIElement[], rules:any):any;
}