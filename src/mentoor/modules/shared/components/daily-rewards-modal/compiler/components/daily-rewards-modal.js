const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class DailyRewardsModalComponent extends ChildComponent {}

module.exports = {
    selector: 'daily-rewards-modal',
    isChild: true,
    handler: DailyRewardsModalComponent,
    isUnique: false,
    component: 'DailyRewardsModal',
    htmlFile: __dirname + '/../../daily-rewards-modal.component.html',
};