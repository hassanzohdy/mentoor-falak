const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class ResourceAlbumComponent extends ChildComponent {}

module.exports = {
    selector: 'resource-album',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: ResourceAlbumComponent,
    isUnique: false,
    component: 'ResourceAlbum',
    htmlFile: __dirname + '/../../resource-album.component.html',
};