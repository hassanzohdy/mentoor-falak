const Component = require(COMPONENT_CLASS_PATH);

class FlkFacebookShareComponent extends Component {}

module.exports = {
    selector: 'flk-facebook-share',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: FlkFacebookShareComponent,
    isUnique: false,
    component: 'FlkFacebookShare',
    htmlFile: __dirname + '/../../flk-facebook-share.component.html',
};