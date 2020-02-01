const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class CalendarComponent extends ChildComponent {}

module.exports = {
    selector: 'calendar',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: CalendarComponent,
    isUnique: false,
    component: 'Calendar',
    htmlFile: __dirname + '/../../calendar.component.html',
};