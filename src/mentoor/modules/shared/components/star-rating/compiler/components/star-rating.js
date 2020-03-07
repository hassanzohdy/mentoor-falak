const Component = require(COMPONENT_CLASS_PATH);

class StarRatingComponent extends Component {}

module.exports = {
    selector: 'star-rating',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: StarRatingComponent,
    isUnique: false,
    component: 'StarRating',
    htmlFile: __dirname + '/../../star-rating.component.html',
};