const Component = require(COMPONENT_CLASS_PATH);

class ProjectCommentsComponent extends Component {}

module.exports = {
    selector: 'project-comments',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ProjectCommentsComponent,
    isUnique: false,
    component: 'ProjectComments',
    htmlFile: __dirname + '/../../project-comments.component.html',
};