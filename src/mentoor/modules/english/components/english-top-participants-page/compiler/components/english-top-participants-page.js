const Component = require(COMPONENT_CLASS_PATH);

class EnglishTopParticipantsPageComponent extends Component {}

module.exports = {
    selector: 'english-top-participants-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: EnglishTopParticipantsPageComponent,
    isUnique: true,
    component: 'EnglishTopParticipantsPage',
    htmlFile: __dirname + '/../../english-top-participants-page.component.html',
};