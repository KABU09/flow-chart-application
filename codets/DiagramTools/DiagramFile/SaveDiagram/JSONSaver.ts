import { DiagramSaver } from "./DiagramSaver";

import * as go from 'gojs'
import * as pd from 'pretty-data'


/**
 * Saves a diagram to a JSON file
 */
export class JSONSaver extends DiagramSaver {
    constructor() {
        super();
        this.ext = "json";
    }
    
    /**
     * parse diagram to json
     * @param diagram GoJS diagram
     * @returns 
     */
    protected parse(diagram: go.Diagram): string {
        let data = diagram.model.toJson();
        data = JSON.parse(data);
        data = JSON.stringify(data);
        this.niceString = pd.pd.json(data);
        return data;
    };
}