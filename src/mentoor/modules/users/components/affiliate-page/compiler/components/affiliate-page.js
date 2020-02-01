const Component = require(COMPONENT_CLASS_PATH);

class AffiliatePageComponent extends Component {}

module.exports = {
    selector: 'affiliate-page',
    isChild: false,
    handler: AffiliatePageComponent,
    isUnique: false,
    component: 'AffiliatePage',
    htmlFile: __dirname + '/../../affiliate-page.component.html',
};