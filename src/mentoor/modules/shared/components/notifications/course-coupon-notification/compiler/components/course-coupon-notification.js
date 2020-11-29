const Component = require(COMPONENT_CLASS_PATH);

class CourseCouponNotificationComponent extends Component {}

module.exports = {
    selector: 'course-coupon-notification',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CourseCouponNotificationComponent,
    isUnique: false,
    component: 'CourseCouponNotification',
    htmlFile: __dirname + '/../../course-coupon-notification.component.html',
};