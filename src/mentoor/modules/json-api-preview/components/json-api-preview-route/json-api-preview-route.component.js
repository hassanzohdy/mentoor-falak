class JsonApiPreviewRoute {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {


    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.handler.onChange('route', this.update.bind(this));

        this.update(this.prop('route'));
    }

    update(route) {
        this.route = route;

        let color = this.getHeadingClassBasedOnRequestMethod();

        this.headingElement = el('span', {
            class: 'request-heading',
        },
            el('strong', {
                class: 'method white-text ' + color,
            }, this.route.method),
            el('strong', {
                class: 'route p-x-1',
            }, this.route.route),
            el('span', {
                class: 'grey-text small title',
            }, this.route.title),
            el('span', {
                class: 'teal-text bold small name',
            }, ' (' + this.route.name + ')'),
        );
    }

    getHeadingClassBasedOnRequestMethod() {
        switch (this.route.method.toUpperCase()) {
            case 'GET':
                return 'blue';
            case 'POST':
                return 'teal';
            case 'PUT':
                return 'orange';
            case 'DELETE':
                return 'red';
            case 'PATCH':
                return 'pink';
            case 'OPTIONS':
                return 'grey';
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}