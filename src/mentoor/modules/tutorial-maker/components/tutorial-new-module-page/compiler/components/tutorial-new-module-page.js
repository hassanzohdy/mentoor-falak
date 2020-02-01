const Component = require(COMPONENT_CLASS_PATH);

class TutorialNewModulePageComponent extends Component {}

module.exports = {
    selector: 'tutorial-new-module-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TutorialNewModulePageComponent,
    isUnique: true,
    component: 'TutorialNewModulePage',
    htmlFile: __dirname + '/../../tutorial-new-module-page.component.html',
};