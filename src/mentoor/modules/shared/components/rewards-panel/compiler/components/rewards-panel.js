const Component = require(COMPONENT_CLASS_PATH);

class RewardsPanelComponent extends Component {}

module.exports = {
    selector: 'rewards-panel',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: RewardsPanelComponent,
    isUnique: true,
    component: 'RewardsPanel',
    htmlFile: __dirname + '/../../rewards-panel.component.html',
};