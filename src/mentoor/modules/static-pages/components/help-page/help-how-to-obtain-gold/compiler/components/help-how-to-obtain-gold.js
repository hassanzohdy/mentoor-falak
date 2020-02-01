const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class HelpHowToObtainGoldComponent extends ChildComponent {}

module.exports = {
    selector: 'help-how-to-obtain-gold',
    isChild: true,
    handler: HelpHowToObtainGoldComponent,
    isUnique: false,
    component: 'HelpHowToObtainGold',
    htmlFile: __dirname + '/../../help-how-to-obtain-gold.component.html',
};