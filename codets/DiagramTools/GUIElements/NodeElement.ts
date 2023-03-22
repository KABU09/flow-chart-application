import { Port } from "./Port";

/**
 * If a shape neets to have ports 
 */
export interface NodeElement{
    ports:Array<Port>;
    addPort(port:Port):void;
}