const Component = require(COMPONENT_CLASS_PATH);

class TimelinePageComponent extends Component {}

module.exports = {
    selector: 'timeline-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TimelinePageComponent,
    isUnique: true,
    component: 'TimelinePage',
    htmlFile: __dirname + '/../../timeline-page.component.html',
};