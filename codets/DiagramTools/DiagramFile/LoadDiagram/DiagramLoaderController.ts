import { JSONLoader } from "./JSONLoader";
import { XMLLoader } from "./XMLLoader";

/**
 * Controller to load diagrams
 */
export class DiagramLoaderController{
    /**
     * adds logic to import button
     * @param diagram GoJS diagram
     */
    public addDiagramImportLogic(diagram:go.Diagram){
        const importButton = document.getElementById('importButton');
        importButton?.addEventListener('click', () => {
            const input: HTMLInputElement = document.createElement('input');
            input.type = "file";
            input.accept = ".json,.xml"
            input.click();
    
            input.addEventListener('change', () => {
                if (input.files) {
                    const file = input.files[0];
                    const name = file.name;
                    const nameSplitted = name.split('.')
                    const ext = nameSplitted[nameSplitted.length - 1];

                    switch(ext){
                        case 'json':
                            const jsonLoader = new JSONLoader();
                            jsonLoader.load(file, diagram);
                            break;
                        case 'xml':
                            const xmlLoader = new XMLLoader();
                            xmlLoader.load(file, diagram);
                            break;
                    }
    
                }
            })
        })
    }
}