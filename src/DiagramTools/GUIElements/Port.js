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
exports.Port = exports.Position = void 0;
var go = __importStar(require("../../../node_modules/gojs/release/go"));
var $ = go.GraphObject.make;
var Position;
(function (Position) {
    Position["UP"] = "up";
    Position["DOWN"] = "down";
    Position["LEFT"] = "left";
    Position["RIGHT"] = "right";
})(Position = exports.Position || (exports.Position = {}));
var positionObject = {
    UP: { id: 'T', align: go.Spot.Top, spot: go.Spot.TopSide },
    DOWN: { id: 'B', align: go.Spot.Bottom, spot: go.Spot.BottomSide },
    LEFT: { id: 'L', align: go.Spot.Left, spot: go.Spot.LeftSide },
    RIGHT: { id: 'R', align: go.Spot.Right, spot: go.Spot.RightSide }
};
/**
 * Point to connect lines between nodes
 */
var Port = /** @class */ (function () {
    /**
     *
     * @param position location of port on the node
     * @param output links can be created from this port
     * @param input links can be created to this port
     * @param inputMaxLinks max number of inbound links
     * @param outputMaxLinks max number of outbound links
     * @param selfLinkable node can link to itself
     */
    function Port(position, output, input, inputMaxLinks, outputMaxLinks, selfLinkable) {
        if (inputMaxLinks === void 0) { inputMaxLinks = 1; }
        if (outputMaxLinks === void 0) { outputMaxLinks = 1; }
        if (selfLinkable === void 0) { selfLinkable = false; }
        this.position = position;
        this.output = output;
        this.input = input;
        this.inputMaxLinks = inputMaxLinks;
        this.outputMaxLinks = outputMaxLinks;
        this.selfLinkable = selfLinkable;
        var posObject = this.getPositionObj(position);
        var horizontal = posObject.align.equals(go.Spot.Top) || posObject.align.equals(go.Spot.Bottom);
        this.port = $(go.Shape, {
            fill: "transparent",
            strokeWidth: 0,
            width: horizontal ? NaN : 8,
            height: !horizontal ? NaN : 8,
            alignment: posObject.align,
            stretch: (horizontal ? go.GraphObject.Horizontal : go.GraphObject.Vertical),
            portId: posObject.id,
            fromSpot: posObject.spot,
            fromLinkable: this.output,
            toSpot: posObject.spot,
            toLinkable: this.input,
            fromMaxLinks: this.outputMaxLinks,
            toMaxLinks: this.inputMaxLinks,
            toLinkableSelfNode: this.selfLinkable,
            fromLinkableSelfNode: this.selfLinkable,
            cursor: "pointer",
            mouseEnter: function (e, port) {
                if (!e.diagram.isReadOnly)
                    port.fill = "rgba(255,0,255,0.5)";
            },
            mouseLeave: function (e, port) {
                port.fill = "transparent";
            }
        });
    }
    /**
     * return port
     * @returns
     */
    Port.prototype.getPort = function () {
        return this.port;
    };
    /**
     * return position of port
     * @param pos
     * @returns
     */
    Port.prototype.getPositionObj = function (pos) {
        switch (pos) {
            case Position.UP:
                return positionObject.UP;
            case Position.DOWN:
                return positionObject.DOWN;
            case Position.LEFT:
                return positionObject.LEFT;
            case Position.RIGHT:
                return positionObject.RIGHT;
        }
    };
    return Port;
}());
exports.Port = Port;
