const ChildComponent = require(CHILD_COMPONENT_CLASS_PATH);

class HomeLatestNewsComponent extends ChildComponent {}

module.exports = {
    selector: 'home-latest-news',
    isChild: true,
    handler: HomeLatestNewsComponent,
    isUnique: false,
    component: 'HomeLatestNews',
    htmlFile: __dirname + '/../../home-latest-news.component.html',
};