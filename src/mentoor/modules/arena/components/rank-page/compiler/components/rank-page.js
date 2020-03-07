const Component = require(COMPONENT_CLASS_PATH);

class RankPageComponent extends Component {}

module.exports = {
    selector: 'rank-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: RankPageComponent,
    isUnique: true,
    component: 'RankPage',
    htmlFile: __dirname + '/../../rank-page.component.html',
};