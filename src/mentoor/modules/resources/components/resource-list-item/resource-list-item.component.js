class ResourceListItem {
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
        this.resource = this.inputs.getProp('resource');
        this.project = this.inputs.getProp('project');
        this.resourcesTypes = this.inputs.getProp('resourcesTypes');
        this.parent = this.inputs.parent;

        this.prepareResource();
    }

    prepareResource() {
        this.resource.canBeModified = this.resource.createdBy.id == this.user.id || this.project && this.project.is.higherAuthority;
    }

    resourceStyle() {
        return {
            'btn-pink': this.resource.type == 'pdf', 
            'btn-pink': this.resource.type == 'image', 
            'btn-gray': this.resource.type == 'website', 
            'btn-danger': this.resource.type == 'youtube', 
            'btn-teal': this.resource.type == 'attachment', 
            'btn-orange': this.resource.type == 'ftp', 
            'btn-green': this.resource.type == 'email', 
            'btn-cyan': this.resource.type == 'link', 
            'btn-default': this.resource.type == 'pdf', 
        };
    }

}