class ResourceModal {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(resourcesService) {
        this.service = resourcesService;        
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.isValidForm = true;
        this.isSending = false;
         this.record = this.inputs.getProp('resource', {});
        this.resourceType = this.inputs.getOption('type');
        this.project = this.inputs.getOption('project');

        this.heading = this.record.id ? 'Edit Resource' : 'Add New Resource';
    }

    async submit(form) {
        this.isSending = true;

        this.detectChanges();

        let updatedRecord;

        if (! this.record.id) {
            let { record } = await this.service.create(form);

            updatedRecord = record;
        } else {    
            let { record } = await this.service.update(this.record.id, form);

            updatedRecord = record;
        }

        this.inputs.getEvent('save')(updatedRecord);
        this.modal.close();
    }
}