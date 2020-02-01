const Component = require(COMPONENT_CLASS_PATH);

class RecordAudioInputComponent extends Component {}

module.exports = {
    selector: 'record-audio-input',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: RecordAudioInputComponent,
    isUnique: false,
    component: 'RecordAudioInput',
    htmlFile: __dirname + '/../../record-audio-input.component.html',
};