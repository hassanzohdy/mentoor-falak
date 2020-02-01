const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ResourceYoutubeComponent extends ChildComponent {}

module.exports = {
    selector: 'resource-youtube',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ResourceYoutubeComponent,
    isUnique: false,
    component: 'ResourceYoutube',
    htmlFile: __dirname + '/../../resource-youtube.component.html',
};