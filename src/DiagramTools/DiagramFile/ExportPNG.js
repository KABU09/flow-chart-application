"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportPNG = void 0;
var ExportPNG = /** @class */ (function () {
    function ExportPNG() {
    }
    ExportPNG.prototype.save = function (diagram) {
        var download = function (blob) {
            var url = window.URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = url;
            link.download = "image.png";
            link.click();
        };
        var a = diagram.makeImageData({ returnType: "blob", callback: download, type: "image/png" });
    };
    return ExportPNG;
}());
exports.ExportPNG = ExportPNG;
