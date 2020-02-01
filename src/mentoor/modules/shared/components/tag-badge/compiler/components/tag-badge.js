const Component = require(COMPONENT_CLASS_PATH);

class TagBadgeComponent extends Component {}

module.exports = {
    selector: 'tag-badge',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TagBadgeComponent,
    isUnique: false,
    component: 'TagBadge',
    htmlFile: __dirname + '/../../tag-badge.component.html',
};