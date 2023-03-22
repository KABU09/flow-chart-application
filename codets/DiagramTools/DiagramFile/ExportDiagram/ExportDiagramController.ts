import { ExportJPEG } from "./ExportJPEG";
import { ExportPDF } from "./ExportPDF";
import { ExportPNG } from "./ExportPNG";

/**
 * Controller to export diagrams
 */
export class ExportDiagramController{

    /**
     * Set listeners related to export a diagram
     * @param diagram Go.JS diagram representation
     */
    public addDiagramExportLogic(diagram:go.Diagram):void{
        const exportPNGLi = document.getElementById('exportPNG');
        exportPNGLi?.addEventListener('click', () => {
            const exportPNG = new ExportPNG();
            exportPNG.save(diagram);
        })
    
        const exportJPEGLi = document.getElementById('exportJPEG');
        exportJPEGLi?.addEventListener('click', () => {
            const exportJPEG = new ExportJPEG();
            exportJPEG.save(diagram);
        })
    
        const exportPDFLi = document.getElementById('exportPDF');
        exportPDFLi?.addEventListener('click', () => {
            const exportPDF = new ExportPDF();
            exportPDF.save(diagram);
        })
    }
}