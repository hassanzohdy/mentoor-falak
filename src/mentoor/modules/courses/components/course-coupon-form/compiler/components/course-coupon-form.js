const Component = require(COMPONENT_CLASS_PATH);

class CourseCouponFormComponent extends Component {}

module.exports = {
    selector: 'course-coupon-form',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CourseCouponFormComponent,
    isUnique: false,
    component: 'CourseCouponForm',
    htmlFile: __dirname + '/../../course-coupon-form.component.html',
};