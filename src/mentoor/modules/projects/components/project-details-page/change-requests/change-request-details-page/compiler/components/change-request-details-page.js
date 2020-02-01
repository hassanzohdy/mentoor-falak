const Component = require(COMPONENT_CLASS_PATH);

class ChangeRequestDetailsPageComponent extends Component {}

module.exports = {
    selector: 'change-request-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ChangeRequestDetailsPageComponent,
    isUnique: true,
    component: 'ChangeRequestDetailsPage',
    htmlFile: __dirname + '/../../change-request-details-page.component.html',
};