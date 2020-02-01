const Component = require(COMPONENT_CLASS_PATH);

class TrainingGroundDetailsPageComponent extends Component {}

module.exports = {
    selector: 'training-ground-details-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TrainingGroundDetailsPageComponent,
    isUnique: true,
    component: 'TrainingGroundDetailsPage',
    htmlFile: __dirname + '/../../training-ground-details-page.component.html',
};