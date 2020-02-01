const Component = require(COMPONENT_CLASS_PATH);

class WritingNotesPageComponent extends Component {}

module.exports = {
    selector: 'writing-notes-page',
    isChild: false,
    handler: WritingNotesPageComponent,
    isUnique: false,
    component: 'WritingNotesPage',
    htmlFile: __dirname + '/../../writing-notes-page.component.html',
};