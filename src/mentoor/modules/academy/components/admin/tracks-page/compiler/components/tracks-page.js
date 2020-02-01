const Component = require(COMPONENT_CLASS_PATH);

class TracksPageComponent extends Component {}

module.exports = {
    selector: 'tracks-page',
    isChild: false,
    handler: TracksPageComponent,
    isUnique: true,
    component: 'TracksPage',
    htmlFile: __dirname + '/../../tracks-page.component.html',
};