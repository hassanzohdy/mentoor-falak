const Component = require(COMPONENT_CLASS_PATH);

class ModerateTrackComponent extends Component {}

module.exports = {
    selector: 'moderate-track',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ModerateTrackComponent,
    isUnique: false,
    component: 'ModerateTrack',
    htmlFile: __dirname + '/../../moderate-track.component.html',
};