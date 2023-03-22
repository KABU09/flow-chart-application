import * as go from 'gojs'

/**
 * Defines how a class must behave an exporter
 */
export interface ExportDiagram{
    save(diagram:go.Diagram):void;
}