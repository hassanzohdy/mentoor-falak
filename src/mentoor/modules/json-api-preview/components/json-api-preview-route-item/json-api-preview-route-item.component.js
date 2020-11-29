class JsonApiPreviewRouteItem {
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
        this.item = this.prop('item');
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}