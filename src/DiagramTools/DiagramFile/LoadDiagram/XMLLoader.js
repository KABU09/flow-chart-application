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
exports.XMLLoader = void 0;
var xml2js = __importStar(require("xml2js"));
var go = __importStar(require("gojs"));
/**
 * Loads a diagram from a XML file
 */
var XMLLoader = /** @class */ (function () {
    function XMLLoader() {
    }
    /**
    * loads diagram from xml file
    * @param file json file
    * @param diagram GoJS diagram
    */
    XMLLoader.prototype.load = function (file, diagram) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            var data = evt.target.result;
            xml2js.parseString(data, { explicitArray: false, explicitRoot: false }, function (err, result) {
                diagram.model = go.Model.fromJson(result);
            });
        };
        reader.readAsText(file);
    };
    return XMLLoader;
}());
exports.XMLLoader = XMLLoader;
