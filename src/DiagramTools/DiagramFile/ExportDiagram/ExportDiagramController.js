"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportDiagramController = void 0;
var ExportJPEG_1 = require("./ExportJPEG");
var ExportPDF_1 = require("./ExportPDF");
var ExportPNG_1 = require("./ExportPNG");
/**
 * Controller to export diagrams
 */
var ExportDiagramController = /** @class */ (function () {
    function ExportDiagramController() {
    }
    /**
     * Set listeners related to export a diagram
     * @param diagram Go.JS diagram representation
     */
    ExportDiagramController.prototype.addDiagramExportLogic = function (diagram) {
        var exportPNGLi = document.getElementById('exportPNG');
        exportPNGLi === null || exportPNGLi === void 0 ? void 0 : exportPNGLi.addEventListener('click', function () {
            var exportPNG = new ExportPNG_1.ExportPNG();
            exportPNG.save(diagram);
        });
        var exportJPEGLi = document.getElementById('exportJPEG');
        exportJPEGLi === null || exportJPEGLi === void 0 ? void 0 : exportJPEGLi.addEventListener('click', function () {
            var exportJPEG = new ExportJPEG_1.ExportJPEG();
            exportJPEG.save(diagram);
        });
        var exportPDFLi = document.getElementById('exportPDF');
        exportPDFLi === null || exportPDFLi === void 0 ? void 0 : exportPDFLi.addEventListener('click', function () {
            var exportPDF = new ExportPDF_1.ExportPDF();
            exportPDF.save(diagram);
        });
    };
    return ExportDiagramController;
}());
exports.ExportDiagramController = ExportDiagramController;
