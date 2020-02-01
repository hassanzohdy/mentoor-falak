const Component = require(COMPONENT_CLASS_PATH);

class EnglishPageComponent extends Component {}

module.exports = {
    selector: 'english-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: EnglishPageComponent,
    isUnique: true,
    component: 'EnglishPage',
    htmlFile: __dirname + '/../../english-page.component.html',
};