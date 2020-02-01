const Component = require(COMPONENT_CLASS_PATH);

class CommentsComponent extends Component {}

module.exports = {
    selector: 'comments',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CommentsComponent,
    isUnique: false,
    component: 'Comments',
    htmlFile: __dirname + '/../../comments.component.html',
};