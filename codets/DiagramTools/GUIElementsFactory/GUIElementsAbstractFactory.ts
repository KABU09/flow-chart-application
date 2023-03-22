import { GUIElement } from '../GUIElements/GUIElement';

/**
 * Interface to define a Factory for GUIELements
 */
export interface GUIElementsFactory{
    createElement(type:any):GUIElement;
    buildShapes(): Array<GUIElement>;
    buildLinks(): Array<GUIElement>;
}