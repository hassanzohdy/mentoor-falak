const Component = require(COMPONENT_CLASS_PATH);

class ProjectCommentCommentsComponent extends Component {}

module.exports = {
    selector: 'project-comment-comments',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectCommentCommentsComponent,
    isUnique: false,
    component: 'ProjectCommentComments',
    htmlFile: __dirname + '/../../project-comment-comments.component.html',
};