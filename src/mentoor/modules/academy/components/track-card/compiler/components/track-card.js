const Component = require(COMPONENT_CLASS_PATH);

class TrackCardComponent extends Component {}

module.exports = {
    selector: 'track-card',
    isChild: false,
    handler: TrackCardComponent,
    isUnique: false,
    component: 'TrackCard',
    htmlFile: __dirname + '/../../track-card.component.html',
};