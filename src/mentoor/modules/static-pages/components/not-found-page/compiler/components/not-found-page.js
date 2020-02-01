const Component = require(COMPONENT_CLASS_PATH);

class NotFoundPageComponent extends Component {}

module.exports = {
    selector: 'not-found-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: NotFoundPageComponent,
    isUnique: true,
    component: 'NotFoundPage',
    htmlFile: __dirname + '/../../not-found-page.component.html',
};