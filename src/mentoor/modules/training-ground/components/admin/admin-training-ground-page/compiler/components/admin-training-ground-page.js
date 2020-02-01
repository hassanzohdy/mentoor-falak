const Component = require(COMPONENT_CLASS_PATH);

class AdminTrainingGroundPageComponent extends Component {}

module.exports = {
    selector: 'admin-training-ground-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: AdminTrainingGroundPageComponent,
    isUnique: true,
    component: 'AdminTrainingGroundPage',
    htmlFile: __dirname + '/../../admin-training-ground-page.component.html',
};