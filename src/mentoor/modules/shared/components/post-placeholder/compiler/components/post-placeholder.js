const Component = require(COMPONENT_CLASS_PATH);

class PostPlaceholderComponent extends Component {}

module.exports = {
    selector: 'post-placeholder',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: PostPlaceholderComponent,
    isUnique: false,
    component: 'PostPlaceholder',
    htmlFile: __dirname + '/../../post-placeholder.component.html',
};