import { DiagramLoader } from "./DiagramLoader";
import * as xml2js from 'xml2js';
import * as go from 'gojs'

declare var jQuery: any;

/**
 * Loads a diagram from a XML file
 */
export class XMLLoader implements DiagramLoader {
    /**
    * loads diagram from xml file
    * @param file json file
    * @param diagram GoJS diagram
    */
    load(file: any, diagram: go.Diagram): any {
        const reader = new FileReader();
        reader.onloadend = function (evt: any) {
            const data = evt.target.result;
            xml2js.parseString(data, {explicitArray: false, explicitRoot: false}, function(err, result) {
                diagram.model = go.Model.fromJson(result);
            })
        };
        reader.readAsText(file);
    }



}