"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagramLoaderController = void 0;
var JSONLoader_1 = require("./JSONLoader");
var XMLLoader_1 = require("./XMLLoader");
/**
 * Controller to load diagrams
 */
var DiagramLoaderController = /** @class */ (function () {
    function DiagramLoaderController() {
    }
    /**
     * adds logic to import button
     * @param diagram GoJS diagram
     */
    DiagramLoaderController.prototype.addDiagramImportLogic = function (diagram) {
        var importButton = document.getElementById('importButton');
        importButton === null || importButton === void 0 ? void 0 : importButton.addEventListener('click', function () {
            var input = document.createElement('input');
            input.type = "file";
            input.accept = ".json,.xml";
            input.click();
            input.addEventListener('change', function () {
                if (input.files) {
                    var file = input.files[0];
                    var name_1 = file.name;
                    var nameSplitted = name_1.split('.');
                    var ext = nameSplitted[nameSplitted.length - 1];
                    //esta logica deberia estar en otro lado
                    //posible patron de diseno
                    switch (ext) {
                        case 'json':
                            var jsonLoader = new JSONLoader_1.JSONLoader();
                            jsonLoader.load(file, diagram);
                            break;
                        case 'xml':
                            var xmlLoader = new XMLLoader_1.XMLLoader();
                            xmlLoader.load(file, diagram);
                            break;
                    }
                }
            });
        });
    };
    return DiagramLoaderController;
}());
exports.DiagramLoaderController = DiagramLoaderController;
