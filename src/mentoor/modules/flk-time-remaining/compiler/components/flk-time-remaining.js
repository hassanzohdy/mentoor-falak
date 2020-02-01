const Component = require(COMPONENT_CLASS_PATH);

class FlkTimeRemainingComponent extends Component {}

module.exports = {
    selector: 'flk-time-remaining',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: FlkTimeRemainingComponent,
    isUnique: false,
    component: 'FlkTimeRemaining',
    htmlFile: __dirname + '/../../flk-time-remaining.component.html',
};