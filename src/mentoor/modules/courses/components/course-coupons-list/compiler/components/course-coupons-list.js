const Component = require(COMPONENT_CLASS_PATH);

class CourseCouponsListComponent extends Component {}

module.exports = {
    selector: 'course-coupons-list',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: CourseCouponsListComponent,
    isUnique: false,
    component: 'CourseCouponsList',
    htmlFile: __dirname + '/../../course-coupons-list.component.html',
};