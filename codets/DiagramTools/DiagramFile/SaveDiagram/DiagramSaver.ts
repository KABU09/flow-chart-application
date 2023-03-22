
import * as go from 'gojs'

const $ = go.GraphObject.make

/**
 * Defines the behavior o a diagram saver
 * Also, implements common logic between savers
 */
export abstract class DiagramSaver {
    ext:string;
    niceString:string;
    constructor(){
        this.ext = '';
        this.niceString = '';
    }

    /**
     * parse diagram to specific format
     * @param diagram 
     */
    protected abstract parse( diagram: go.Diagram): string;

    /**
     * Save diagram to file
     * @param diagram GoJS diagram
     * @returns 
     */
    async save(diagram: go.Diagram): Promise<string> {
        const data:string = this.parse(diagram);
        try {
            const result = await fetch('/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "diagram": data, "ext": this.ext }),
            })

            const dataParsed = await result.json();
            const fileName = dataParsed.fileName;
            return '/download/' + fileName;
        }
        catch (err) {
            console.error(err);
        }
        return '';
    };

    /**
     * download file
     * @param path 
     */
    public downloadFile(path: string) {
        const link = document.createElement('a');
        link.href = path;
        link.download = path.substr(path.lastIndexOf('/') + 1);
        link.click();
    }
}