const Component = require(COMPONENT_CLASS_PATH);

class PostPageComponent extends Component {}

module.exports = {
    selector: 'post-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: PostPageComponent,
    isUnique: true,
    component: 'PostPage',
    htmlFile: __dirname + '/../../post-page.component.html',
};