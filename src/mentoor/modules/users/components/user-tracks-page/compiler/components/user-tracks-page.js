const Component = require(COMPONENT_CLASS_PATH);

class UserTracksPageComponent extends Component {}

module.exports = {
    selector: 'user-tracks-page',
    isChild: false,
    handler: UserTracksPageComponent,
    isUnique: false,
    component: 'UserTracksPage',
    htmlFile: __dirname + '/../../user-tracks-page.component.html',
};