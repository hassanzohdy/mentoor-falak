const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class CalendarScheduleItemComponent extends ChildComponent {}

module.exports = {
    selector: 'calendar-schedule-item',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: CalendarScheduleItemComponent,
    isUnique: false,
    component: 'CalendarScheduleItem',
    htmlFile: __dirname + '/../../calendar-schedule-item.component.html',
};