class ProjectCommentComments {
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
        this.comment = this.inputs.getProp('comment');
        this.project = this.inputs.getProp('project');
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}