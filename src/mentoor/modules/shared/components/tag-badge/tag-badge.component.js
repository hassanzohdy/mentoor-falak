class TagBadge {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {
        this.tag = null;
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.tag = this.inputs.getProp('tag');
        this.small = this.inputs.getProp('small', false);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}