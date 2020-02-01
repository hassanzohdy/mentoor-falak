const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class HelpWhatToBuyWithGoldComponent extends ChildComponent {}

module.exports = {
    selector: 'help-what-to-buy-with-gold',
    isChild: true,
    handler: HelpWhatToBuyWithGoldComponent,
    isUnique: false,
    component: 'HelpWhatToBuyWithGold',
    htmlFile: __dirname + '/../../help-what-to-buy-with-gold.component.html',
};