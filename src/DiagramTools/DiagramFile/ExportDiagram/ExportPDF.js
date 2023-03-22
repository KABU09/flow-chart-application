"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportPDF = void 0;
var jspdf_1 = require("jspdf");
/**
 * Exports a diagram in a PDF file
 */
var ExportPDF = /** @class */ (function () {
    function ExportPDF() {
    }
    /**
     * Exports the diagram as an PDF file
     * @param diagram Go.JS diagram representation
     */
    ExportPDF.prototype.save = function (diagram) {
        var image = diagram.makeImageData({ type: "image/jpeg", background: "white", returnType: "Image" });
        var dimensions = new jspdf_1.jsPDF();
        var props = dimensions.getImageProperties(image);
        var doc = new jspdf_1.jsPDF({
            orientation: 'landscape',
            unit: "mm",
            format: [props.width + 100, props.height + 100]
        });
        doc.addImage(image, 'JPEG', 50, 50, props.width, props.height);
        doc.save('diagram.pdf');
    };
    return ExportPDF;
}());
exports.ExportPDF = ExportPDF;
