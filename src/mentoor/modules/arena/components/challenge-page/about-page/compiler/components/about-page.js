const Component = require(COMPONENT_CLASS_PATH);

class AboutPageComponent extends Component {}

module.exports = {
    selector: 'about-page',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: AboutPageComponent,
    isUnique: true,
    component: 'AboutPage',
    htmlFile: __dirname + '/../../about-page.component.html',
};