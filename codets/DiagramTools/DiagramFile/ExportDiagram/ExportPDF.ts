import * as go from 'gojs'
import { ExportDiagram } from "./ExportDiagram";
import {jsPDF} from 'jspdf'

/**
 * Exports a diagram in a PDF file
 */
export class ExportPDF implements ExportDiagram {

    /**
     * Exports the diagram as an PDF file
     * @param diagram Go.JS diagram representation
     */
    save(diagram: go.Diagram): void {
        const image:any = diagram.makeImageData({type: "image/jpeg", background: "white", returnType:"Image"});
        const dimensions = new jsPDF();
        const props = dimensions.getImageProperties(image);

        const doc = new jsPDF({
            orientation: 'landscape',
            unit: "mm",
            format: [props.width + 100, props.height + 100]
        });
        
        doc.addImage(image, 'JPEG', 50, 50, props.width, props.height);
        doc.save('diagram.pdf');
    }

}