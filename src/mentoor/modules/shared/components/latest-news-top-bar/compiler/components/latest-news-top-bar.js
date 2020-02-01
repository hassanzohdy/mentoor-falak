const Component = require(COMPONENT_CLASS_PATH);

class LatestNewsTopBarComponent extends Component {}

module.exports = {
    selector: 'latest-news-top-bar',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: LatestNewsTopBarComponent,
    isUnique: false,
    component: 'LatestNewsTopBar',
    htmlFile: __dirname + '/../../latest-news-top-bar.component.html',
};