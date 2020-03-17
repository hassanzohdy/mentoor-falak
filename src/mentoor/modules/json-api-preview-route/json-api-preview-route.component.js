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
        this.route = this.prop('route');

        let color = this.getHeadingClassBasedOnRequestMethod();

        this.headingElement = el('div', {
            class: 'request-heading ' + color,
        },
            el('strong', {
                class: 'method white-text ' + color,
            }, this.route.method),
            el('strong', {
                class: 'route',
            }, this.route.route),
            el('span', {
                class: 'grey-text title ' + color,
            }, this.route.title),
        );

        echo(this.headingElement)
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
            case 'OPTIONS':
                return 'grey';
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}