import { DiagramSaver } from "./DiagramSaver";
import * as xml2js from 'xml2js';

import * as go from 'gojs'
import * as pd from 'pretty-data'

/**
 * Saves a diagram to a XML file
 */
export class XMLSaver extends DiagramSaver{
    constructor() {
        super();
        this.ext = "xml";
    }
    
    /**
    * parse diagram to xml
    * @param diagram GoJS diagram
    * @returns
    */
    protected parse(diagram: go.Diagram): string{
        const data = diagram.model.toJson();
        const builder = new xml2js.Builder({headless:true});
        const dataXML = builder.buildObject(JSON.parse(data));
        this.niceString = pd.pd.xml(dataXML);
        return dataXML;
    }
}