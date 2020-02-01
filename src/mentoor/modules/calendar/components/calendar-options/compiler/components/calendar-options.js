const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class CalendarOptionsComponent extends ChildComponent {}

module.exports = {
    selector: 'calendar-options',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: CalendarOptionsComponent,
    isUnique: false,
    component: 'CalendarOptions',
    htmlFile: __dirname + '/../../calendar-options.component.html',
};