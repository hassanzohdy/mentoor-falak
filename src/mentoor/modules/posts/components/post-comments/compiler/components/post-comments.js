const Component = require(COMPONENT_CLASS_PATH);

class PostCommentsComponent extends Component {}

module.exports = {
    selector: 'post-comments',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: PostCommentsComponent,
    isUnique: false,
    component: 'PostComments',
    htmlFile: __dirname + '/../../post-comments.component.html',
};