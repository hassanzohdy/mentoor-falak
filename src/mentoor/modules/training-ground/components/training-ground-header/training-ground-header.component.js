class TrainingGroundHeader {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user) {
        this.user = user;
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.autoOpenCocktailModal = this.inputs.getProp('autoOpen');

        this.onUnlock = this.inputs.getEvent('unlock');

        if (this.autoOpenCocktailModal) {
            this.openCocktailsModal = true;
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}