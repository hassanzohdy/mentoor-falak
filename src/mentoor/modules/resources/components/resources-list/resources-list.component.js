class ResourcesList {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(resourcesService) {
        this.resourcesService = resourcesService;            
        this.resourcesTypes = {
            link: 'External Link',
            attachment: 'Attachment',
            image: 'Image',
            // album: 'Album',
            pdf: 'PDF FIle',
            ftp: 'FTP Account',
            email: 'Email Account',
            website: 'Website Account',
            youtube: 'Youtube Video',
        };
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.resources = this.inputs.getProp('resources');
        this.project = this.inputs.getProp('project');
        this.canAdd = this.inputs.getProp('canAdd');        
        this.availableResources = {};

        this.prepareResourcesList();

        if (this.canAdd) {
            if (this.canAdd === true) {
                this.availableResources = this.resourcesTypes;
            } else if (Is.array(this.canAdd)) {
                for (let resource of this.canAdd) {
                    this.availableResources[resource] = this.resourcesTypes[resource]; 
                }
            }
        }
    }

    remove(resource) {
        this.resourcesService.delete(resource.id);

        this.resources = Array.remove(this.resources, resourceItem => resourceItem.id == resource.id);  
        
        this.prepareResourcesList();

        this.inputs.getEvent('remove')(this.resources);
    }

    setNewResource(resource) {
        this.resourceType = resource;
        this.openResourceModal = true;
    }

    openModal(resource, index) {
        this.resource = resource;
        this.index = index;
        this.resourceType = resource.type;
        this.openResourceModal = true;
    }

    onClose() {
        this.resourceType = null;
        this.openResourceModal = null;
        this.index = null;
        this.resource = null;
    }

    prepareResourcesList() {
        this.resourcesList = {
            pinned: this.resources.filter(resource => resource.pinned),
            normal: this.resources.filter(resource => ! resource.pinned),
        };
    }

    adjustResource(resource) {
        if (this.index) {
            this.resources[this.index] = resource;
        } else {
            this.resources.unshift(resource);
        }

        this.prepareResourcesList();
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}