const Component = require(COMPONENT_CLASS_PATH);

class TrainingGroundPageComponent extends Component {}

module.exports = {
    selector: 'training-ground-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: TrainingGroundPageComponent,
    isUnique: true,
    component: 'TrainingGroundPage',
    htmlFile: __dirname + '/../../training-ground-page.component.html',
};