/**
 * If a shape needs to be rendered it must implement GUIElement
 */
export interface GUIElement{
    title:string | undefined;

    generateView():any;
}