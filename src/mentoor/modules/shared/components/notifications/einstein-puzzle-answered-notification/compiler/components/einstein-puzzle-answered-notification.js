const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class EinsteinPuzzleAnsweredNotificationComponent extends ChildComponent {}

module.exports = {
    selector: 'einstein-puzzle-answered-notification',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: EinsteinPuzzleAnsweredNotificationComponent,
    isUnique: false,
    component: 'EinsteinPuzzleAnsweredNotification',
    htmlFile: __dirname + '/../../einstein-puzzle-answered-notification.component.html',
};