const Component = require(COMPONENT_CLASS_PATH);

class TrackDetailsPageComponent extends Component {}

module.exports = {
    selector: 'track-details-page',
    isChild: false,
    handler: TrackDetailsPageComponent,
    isUnique: false,
    component: 'TrackDetailsPage',
    htmlFile: __dirname + '/../../track-details-page.component.html',
};