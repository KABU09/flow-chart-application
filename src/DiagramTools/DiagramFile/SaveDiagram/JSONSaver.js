"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.JSONSaver = void 0;
var DiagramSaver_1 = require("./DiagramSaver");
var pd = __importStar(require("pretty-data"));
/**
 * Saves a diagram to a JSON file
 */
var JSONSaver = /** @class */ (function (_super) {
    __extends(JSONSaver, _super);
    function JSONSaver() {
        var _this = _super.call(this) || this;
        _this.ext = "json";
        return _this;
    }
    /**
     * parse diagram to json
     * @param diagram GoJS diagram
     * @returns
     */
    JSONSaver.prototype.parse = function (diagram) {
        var data = diagram.model.toJson();
        data = JSON.parse(data);
        data = JSON.stringify(data);
        this.niceString = pd.pd.json(data);
        return data;
    };
    ;
    return JSONSaver;
}(DiagramSaver_1.DiagramSaver));
exports.JSONSaver = JSONSaver;
