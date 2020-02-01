const Component = require(COMPONENT_CLASS_PATH);

class TracksListPageComponent extends Component {}

module.exports = {
    selector: 'tracks-list-page',
    isChild: false,
    handler: TracksListPageComponent,
    isUnique: false,
    component: 'TracksListPage',
    htmlFile: __dirname + '/../../tracks-list-page.component.html',
};