"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportJPEG = void 0;
var ExportJPEG = /** @class */ (function () {
    function ExportJPEG() {
    }
    ExportJPEG.prototype.save = function (diagram) {
        var download = function (blob) {
            var url = window.URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = url;
            link.download = "image.jpeg";
            link.click();
        };
        var a = diagram.makeImageData({ returnType: "blob", callback: download, type: "image/jpeg", background: "white" });
    };
    return ExportJPEG;
}());
exports.ExportJPEG = ExportJPEG;
