const Component = require(COMPONENT_CLASS_PATH);

class FacebookCoverPageComponent extends Component {}

module.exports = {
    selector: 'facebook-cover-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: FacebookCoverPageComponent,
    isUnique: true,
    component: 'FacebookCoverPage',
    htmlFile: __dirname + '/../../facebook-cover-page.component.html',
};