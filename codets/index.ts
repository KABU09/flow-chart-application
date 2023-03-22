import { Shape } from './DiagramTools/GUIElements/Shape';
import { FlowChartRender } from './DiagramTools/Render/FlowChartRender';
import { DiagramSaverController } from './DiagramTools/DiagramFile/SaveDiagram/DiagramSaverController';
import { ExportDiagramController } from './DiagramTools/DiagramFile/ExportDiagram/ExportDiagramController';
import { DiagramLoaderController } from './DiagramTools/DiagramFile/LoadDiagram/DiagramLoaderController';
import { FlowChartFactory } from './DiagramTools/GUIElementsFactory/FlowChartFactory';
import { Picture } from './DiagramTools/GUIElements/GenericGUIElements/Picture';
import { GUIElement } from './DiagramTools/GUIElements/GUIElement';
import { Port, Position } from './DiagramTools/GUIElements/Port';
import { Column } from './DiagramTools/GUIElements/GenericGUIElements/Column';

import { Rhomboid } from './DiagramTools/GUIElements/GenericGUIElements/Rhomboid';

/**
 * initiates the application
 */
const init = async () => {

    //build elements
    const flowChartFactory = new FlowChartFactory()
    const shapes: Array<GUIElement> = flowChartFactory.buildShapes();

    //TEST LOGICAL GATES
    const picture = new Picture("imagen1", 100, 50, 'and.png', "some text", true, "#000000");
    picture.addPort(new Port(Position.LEFT, true, true, 2));
    picture.addPort(new Port(Position.RIGHT, true, true));
    shapes.push(picture);

    //TEST COLUMN
    const data = ["Class name", "-attribute:type", "+method(param:type):returnType", "test 1", "test 2"];
    const column = new Column("Column", data, "#D8D8D8", true, "#000000", 5, new Rhomboid("Rombo", "", "#ff00d9",false,"#000000"));
    column.addPort(new Port(Position.UP, true, true));
    column.addPort(new Port(Position.DOWN, true, true));
    column.addPort(new Port(Position.LEFT, true, true));
    column.addPort(new Port(Position.RIGHT, true, true));
    shapes.push(column);

    const links: Array<GUIElement> = flowChartFactory.buildLinks();

    
    //render elements
    const flowChartRender = new FlowChartRender();

    const configRules = require('../diagram.config.json')
    const diagram = flowChartRender.renderElements(shapes, links,configRules);

    //add toolbar logic
    const saverController = new DiagramSaverController();
    const exportController = new ExportDiagramController();
    const loaderController = new DiagramLoaderController();

    saverController.addDiagramSaveLogic(diagram);
    exportController.addDiagramExportLogic(diagram);
    loaderController.addDiagramImportLogic(diagram);
}

init()


