import * as go from 'gojs'

/**
 * Defines the behavior of a diagram loader
 */
export interface DiagramLoader{
    load(file:any, diagram:go.Diagram):void;
}