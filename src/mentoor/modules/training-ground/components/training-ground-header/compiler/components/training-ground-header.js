const Component = require(COMPONENT_CLASS_PATH);

class TrainingGroundHeaderComponent extends Component {}

module.exports = {
    selector: 'training-ground-header',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TrainingGroundHeaderComponent,
    isUnique: false,
    component: 'TrainingGroundHeader',
    htmlFile: __dirname + '/../../training-ground-header.component.html',
};