import { DiagramSaver } from "./DiagramSaver";
import { JSONSaver } from "./JSONSaver";
import * as go from 'gojs/release/go'
import { XMLSaver } from "./XMLSaver";

const $ = go.GraphObject.make
declare var jQuery: any;

/**
 * Controller to save diagrams
 */
export class DiagramSaverController {

    /**
     * adds logic to save button
     * @param diagram GoJS diagram
     */
    public addDiagramSaveLogic(diagram: go.Diagram) {
        const buttonModal: any = document.getElementById('modalDisplay');
        const previewText: any = document.getElementById('previewText');

        const diagramJSONSaver = new JSONSaver();
        const buttonJSON: any = document.getElementById('saveJSON');

        const downloadFile = (saver: DiagramSaver, path: string) => {
            const preview = document.getElementById('download');
            const close = document.getElementById('close');

            const downloadEvent = () => {
                saver.downloadFile(path)
                close?.click();
            }

            preview?.addEventListener('click', downloadEvent)

            jQuery('#previewModal').on('hidden.bs.modal', () => {
                preview?.removeEventListener('click', downloadEvent)
            })

        }
        buttonJSON?.addEventListener('click', async () => {
            const path = await diagramJSONSaver.save(diagram);
            previewText.innerText = diagramJSONSaver.niceString;
            buttonModal.click();
            previewText.scrollTop = 0;
            downloadFile(diagramJSONSaver, path);
        })

        const diagramXMLSaver = new XMLSaver();
        const buttonXML: any = document.getElementById('saveXML');

        buttonXML?.addEventListener('click', async () => {
            const path = await diagramXMLSaver.save(diagram);
            previewText.innerText = diagramXMLSaver.niceString;
            buttonModal.click();
            previewText.scrollTop = 0;
            downloadFile(diagramXMLSaver, path);
        })

    }
}

