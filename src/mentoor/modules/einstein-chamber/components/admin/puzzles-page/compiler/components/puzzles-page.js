const Component = require(COMPONENT_CLASS_PATH);

class EinsteinAdminPuzzlesComponent extends Component {}

module.exports = {
    selector: 'puzzles-page',
    isChild: false,
    handler: EinsteinAdminPuzzlesComponent,
    isUnique: false,
    component: 'EinsteinAdminPuzzles',
    htmlFile: __dirname + '/../../puzzles-page.component.html',
};