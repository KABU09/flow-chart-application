import * as go from '../../../node_modules/gojs/release/go'

const $ = go.GraphObject.make

export enum Position {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right'
}

const positionObject = {
    UP:   { id: 'T', align: go.Spot.Top, spot: go.Spot.TopSide },
    DOWN: { id: 'B', align: go.Spot.Bottom, spot: go.Spot.BottomSide },
    LEFT: { id: 'L', align: go.Spot.Left, spot: go.Spot.LeftSide },
    RIGHT:{ id: 'R', align: go.Spot.Right, spot: go.Spot.RightSide }
}

/**
 * Point to connect lines between nodes
 */
export class Port {
    private port:any;

    /**
     * 
     * @param position location of port on the node
     * @param output links can be created from this port
     * @param input links can be created to this port
     * @param inputMaxLinks max number of inbound links
     * @param outputMaxLinks max number of outbound links
     * @param selfLinkable node can link to itself
     */
    constructor(public position: Position, public output:boolean, public input:boolean, public inputMaxLinks:number = 1, public outputMaxLinks:number = 1, public selfLinkable:boolean = false) {
        let posObject:any = this.getPositionObj(position);
        var horizontal = posObject.align.equals(go.Spot.Top) || posObject.align.equals(go.Spot.Bottom);
        this.port = $(go.Shape,
            {
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
                mouseEnter: function (e:any, port:any) {
                    if (!e.diagram.isReadOnly) port.fill = "rgba(255,0,255,0.5)";
                },
                mouseLeave: function (e:any, port:any) {
                    port.fill = "transparent";
                }
            });
    }

    /**
     * return port
     * @returns 
     */
    getPort():any{
        return this.port;
    }
    
    /**
     * return position of port
     * @param pos 
     * @returns 
     */
    getPositionObj(pos: Position): any {
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
    }
}