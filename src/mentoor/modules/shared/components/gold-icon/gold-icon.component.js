class GoldIcon {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {        
        this.large = false;
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.textColor = this.inputs.getAttr('color') ? this.inputs.getAttr('color') + '-text' : '';
        this.coins = this.inputs.getOption('coins');
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}