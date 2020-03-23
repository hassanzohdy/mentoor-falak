const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class CourseCouponsComponent extends ChildComponent {}

module.exports = {
    selector: 'course-coupons',
    isChild: true,
    contentToString: false,
    parseContent: true,
    handler: CourseCouponsComponent,
    isUnique: false,
    component: 'CourseCoupons',
    htmlFile: __dirname + '/../../course-coupons.component.html',
};