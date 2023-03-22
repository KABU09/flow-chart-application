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
exports.ArrowHead = void 0;
var go = __importStar(require("gojs"));
var $ = go.GraphObject.make;
/**
 * Head of line
 */
var ArrowHead = /** @class */ (function () {
    /**
     *
     * @param title arrow title
     * @param svgPath svg path atribute. Custom svgs are allowed
     * @param fill arrow fill color
     * @param toHead it determines if an arrow is at the begining or at the end of the link
     * @param strokeWidth arrow strokewidth
     */
    function ArrowHead(title, svgPath, fill, toHead, strokeWidth) {
        if (fill === void 0) { fill = "#000000"; }
        if (toHead === void 0) { toHead = true; }
        if (strokeWidth === void 0) { strokeWidth = 1; }
        this.svgPath = svgPath;
        this.fill = fill;
        this.toHead = toHead;
        this.strokeWidth = strokeWidth;
        this.title = title;
        if (this.title && this.svgPath) {
            go.Shape.defineArrowheadGeometry(this.title, this.svgPath);
        }
        else {
            this.title = "";
        }
    }
    return ArrowHead;
}());
exports.ArrowHead = ArrowHead;
