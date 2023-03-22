import { DiagramLoader } from "./DiagramLoader";

import * as go from 'gojs'

/**
 * Loads a diagram from a JSON file
 */
export class JSONLoader implements DiagramLoader {
    /**
     * loads diagram from json file
     * @param file json file
     * @param diagram GoJS diagram
     */
    load(file:any, diagram:go.Diagram): void {
        const reader = new FileReader();
        reader.onload = function (evt: any) {
            const dataParsed = JSON.parse(evt.target.result);
            diagram.model = go.Model.fromJson(dataParsed);
        };
        reader.readAsText(file);
    }

}