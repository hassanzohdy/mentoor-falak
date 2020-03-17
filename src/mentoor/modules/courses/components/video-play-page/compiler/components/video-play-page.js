const Component = require(COMPONENT_CLASS_PATH);

class VideoPlayPageComponent extends Component {}

module.exports = {
    selector: 'video-play-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: VideoPlayPageComponent,
    isUnique: true,
    component: 'VideoPlayPage',
    htmlFile: __dirname + '/../../video-play-page.component.html',
};