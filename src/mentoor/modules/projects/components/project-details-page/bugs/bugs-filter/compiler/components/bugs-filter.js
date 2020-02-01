const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class BugsFilterComponent extends ChildComponent {}

module.exports = {
    selector: 'bugs-filter',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: BugsFilterComponent,
    isUnique: false,
    component: 'BugsFilter',
    htmlFile: __dirname + '/../../bugs-filter.component.html',
};