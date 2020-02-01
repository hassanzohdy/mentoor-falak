const Component = require(COMPONENT_CLASS_PATH);

class CalendarPageComponent extends Component {}

module.exports = {
    selector: 'calendar-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CalendarPageComponent,
    isUnique: true,
    component: 'CalendarPage',
    htmlFile: __dirname + '/../../calendar-page.component.html',
};