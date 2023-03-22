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
exports.ArrowBody = void 0;
var go = __importStar(require("gojs"));
var $ = go.GraphObject.make;
/**
 * Body of line
 */
var ArrowBody = /** @class */ (function () {
    /**
     *
     * @param title title
     * @param svgPath  svg path atribute. Custom svgs are allowed
     * @param fill link fill color
     * @param strokeWidth link strokewidth
     */
    function ArrowBody(title, svgPath, fill, strokeWidth) {
        if (fill === void 0) { fill = "#000000"; }
        if (strokeWidth === void 0) { strokeWidth = 1; }
        this.title = title;
        this.svgPath = svgPath;
        this.strokeWidth = strokeWidth;
        this.fill = fill;
    }
    /**
     * Generates a Go.JS line
     * @returns
     */
    ArrowBody.prototype.generateView = function () {
        var link = $(go.Shape, {
            geometryString: (this.svgPath) ? this.svgPath : "M0 0 L1 0", fill: "transparent", stroke: this.fill, strokeWidth: this.strokeWidth, strokeCap: "square"
        });
        return link;
    };
    return ArrowBody;
}());
exports.ArrowBody = ArrowBody;
