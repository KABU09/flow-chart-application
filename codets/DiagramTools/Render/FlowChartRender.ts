import { GUIElement } from "../GUIElements/GUIElement";
import { Render } from "./Render";

import * as go from '../../../node_modules/gojs/release/go'
import { Shape } from "../GUIElements/Shape";

const $ = go.GraphObject.make
declare var jQuery: any;

/**
 * Controller that render the shapes in the canvas.
 * Manages the interaction logic and events
 * Defines the rules between nodes and links
 */
export class FlowChartRender implements Render{

    /**
     * render elements to diagram
     * @param shapes array of shapes
     * @param links array of links
     * @param rules rules to connect nodes
     * @returns 
     */
    renderElements(shapes: GUIElement[], links: GUIElement[], rules:any):any{

        const myDiagram =
            $(go.Diagram, "myDiagramDiv",
                {
                    "undoManager.isEnabled": true,
                });

        myDiagram.model = $(go.GraphLinksModel,
            {linkFromPortIdProperty: "fromPort",
        linkToPortIdProperty: "toPort"});
        
        
        myDiagram.addDiagramListener("LinkDrawn", function(e:any){
            let node = e.subject.fromNode;
            if (node.data.category === "Conditional"){
                let linksInto = node.findLinksOutOf();
                if (linksInto.count === 1){
                    e.subject.findObject("Label").text = "Yes";
                }else{
                    e.subject.findObject("Label").text = (linksInto.first().findObject("Label").text === "Yes") ? "No" : "Yes";
                }
            }
        })
        
        for(let link of links){
            if(link.title){
                myDiagram.linkTemplateMap.add(link.title, link.generateView())
            }
        }
    
        myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
        myDiagram.toolManager.relinkingTool.temporaryLink.routing = go.Link.Orthogonal;

        function validateLink(fromnode:any, fromport:any, tonode:any, toport:any){
            
            const from = fromnode?.data?.category;
            const to = tonode?.data?.category;
            const linkType = jQuery("#switchLine").val();

            
            if(!rules){
                return false;
            }
            if(!rules[from]){
                return false;
            }
            if(!rules[from]["can"]){
                return false;
            }
            if(! rules[from]["can"][to]){
                return false;
            }
            if(!rules[from]["can"][to]["link"]){
                return false;
            }
            
            const values = rules[from]["can"][to]["link"];
            
            if( !values.includes(linkType)){
                return false;
            }
            
            const value = values.find( (item:any) => item===linkType);
            
            if(!value){
                return false;
            }

            myDiagram.toolManager.linkingTool.archetypeLinkData = { category: value};
            return true;
        }
        
        myDiagram.toolManager.linkingTool.linkValidation = validateLink;
        myDiagram.toolManager.relinkingTool.linkValidation = validateLink;
        
        for(const shape of shapes){
            if(shape){
                myDiagram.nodeTemplateMap.add(shape?.title || 'Figure', shape.generateView());
            }
        }
    
        const categories:any[] = [];
        for(const guiElement of shapes){
            const shape = <Shape> guiElement;
            categories.push({
                        category: shape?.title,
                        text: shape?.innerText,
                    })
        }
    
        const pallete = $(go.Palette, "myDiagramDash",
                {
                    nodeTemplateMap: myDiagram.nodeTemplateMap,
                    model: new go.GraphLinksModel(categories),
                })
        return myDiagram;
    }

}