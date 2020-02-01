class CLASS_NAME extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(SERVICE_NAME) {
        super(SERVICE_NAME);
        this.name = 'project-details-ITEM_KEY';
        this.prependName = 'ITEM_KEY_CAPITALIZED';
        this.itemKey = 'ITEM_KEY';
        this.query = {
            ITEM_KEY: true,
        };
    }
}