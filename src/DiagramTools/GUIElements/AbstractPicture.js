"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
var Picture = /** @class */ (function () {
    function Picture(title, width, height, path) {
        this.title = title;
        this.width = width;
        this.height = height;
        this.path = path;
        this.ports = new Array();
    }
    Picture.prototype.addPort = function (port) {
        this.ports.push(port);
    };
    Picture.prototype.generateView = function () {
        throw new Error("Method not implemented.");
    };
    return Picture;
}());
exports.Picture = Picture;
