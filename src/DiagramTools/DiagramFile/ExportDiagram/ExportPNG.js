"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportPNG = void 0;
var go = __importStar(require("gojs"));
/**
 * Exports a diagram in a PNG image
 */
var ExportPNG = /** @class */ (function () {
    function ExportPNG() {
    }
    /**
     * Exports the diagram as an PNG image
     * @param diagram Go.JS diagram representation
     */
    ExportPNG.prototype.save = function (diagram) {
        var download = function (blob) {
            var url = window.URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = url;
            link.download = "image.png";
            link.click();
        };
        var a = diagram.makeImageData({ returnType: "blob", callback: download, type: "image/png", size: new go.Size(diagram.documentBounds.width, diagram.documentBounds.height) });
    };
    return ExportPNG;
}());
exports.ExportPNG = ExportPNG;
