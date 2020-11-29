const Component = require(COMPONENT_CLASS_PATH);

class ScreenRecorderComponent extends Component {}

module.exports = {
    selector: 'screen-recorder',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ScreenRecorderComponent,
    isUnique: false,
    component: 'ScreenRecorder',
    htmlFile: __dirname + '/../../screen-recorder.component.html',
};