const Component = require(COMPONENT_CLASS_PATH);

class ParticipantsPageComponent extends Component {}

module.exports = {
    selector: 'participants-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ParticipantsPageComponent,
    isUnique: true,
    component: 'ParticipantsPage',
    htmlFile: __dirname + '/../../participants-page.component.html',
};