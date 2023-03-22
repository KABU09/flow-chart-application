"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
/**
 * Abstract class to define a shape
 */
var Shape = /** @class */ (function () {
    /**
     *
     * @param title shape title
     * @param innerText displayed text
     * @param fill shape color
     * @param editable determines if the text is editable
     * @param fontColor fontcolor of the shape
     * @param nativeGOJSShapeType name given from Go.JS to the shape
     */
    function Shape(title, innerText, fill, editable, fontColor, nativeGOJSShapeType) {
        this.title = title;
        this.innerText = innerText;
        this.fill = fill;
        this.editable = editable;
        this.fontColor = fontColor;
        this.nativeGOJSShapeType = nativeGOJSShapeType;
    }
    Shape.prototype.generateView = function () {
        throw new Error("Method not implemented.");
    };
    return Shape;
}());
exports.Shape = Shape;
