const Component = require(COMPONENT_CLASS_PATH);

class CalendarScheduleItemComponent extends Component {}

module.exports = {
    selector: 'calendar-schedule-item',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CalendarScheduleItemComponent,
    isUnique: false,
    component: 'CalendarScheduleItem',
    htmlFile: __dirname + '/../../calendar-schedule-item.component.html',
};