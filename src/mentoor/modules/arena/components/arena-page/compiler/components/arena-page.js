const Component = require(COMPONENT_CLASS_PATH);

class ArenaPageComponent extends Component {}

module.exports = {
    selector: 'arena-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ArenaPageComponent,
    isUnique: true,
    component: 'ArenaPage',
    htmlFile: __dirname + '/../../arena-page.component.html',
};