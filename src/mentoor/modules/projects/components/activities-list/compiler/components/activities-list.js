const Component = require(COMPONENT_CLASS_PATH);

class ActivitiesListComponent extends Component {}

module.exports = {
    selector: 'activities-list',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: ActivitiesListComponent,
    isUnique: false,
    component: 'ActivitiesList',
    htmlFile: __dirname + '/../../activities-list.component.html',
};