const Component = require(COMPONENT_CLASS_PATH);

class FlkTimerComponent extends Component {}

module.exports = {
    selector: 'flk-timer',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: FlkTimerComponent,
    isUnique: false,
    component: 'FlkTimer',
    htmlFile: __dirname + '/../../flk-timer.component.html',
};