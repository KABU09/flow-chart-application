import * as go from "gojs";
import { ExportDiagram } from "./ExportDiagram";

/**
 * Exports a diagram in a PNG image
 */
export class ExportPNG implements ExportDiagram {

    /**
     * Exports the diagram as an PNG image
     * @param diagram Go.JS diagram representation
     */
    save(diagram: go.Diagram): void {
        const download = (blob: any) => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `image.png`;
            link.click();
        }
        const a = diagram.makeImageData({ returnType: "blob", callback: download, type: "image/png", size: new go.Size(diagram.documentBounds.width, diagram.documentBounds.height)});
    }

}