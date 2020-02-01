class BugModal {
    // @macro(loadSprints, loadModules)
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(projectBugsService) {
        this.service = projectBugsService;
        this.priorities = PRIORITIES;
        this.statuses = BUGS_STATUSES;
        this.departments = [
            'backend',
            'frontend',
            'mobile',
        ];

        this.severities = [
            'showstopper',
            'critical',
            'major',
            'minor',
        ];

        this.classifications = [
            'security',
            'crash',
            'dataLoss',
            'performance',
            'uiUsability',
            'feature',
            'enhancement',
            'other',
        ];

        this.reproducibleOptions = [
            'always',
            'rarely',
            'sometimes',
            'unable',
            'neverTried',
            'notApplicable',
        ];
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.isValidForm = true;
        this.isSending = false;
        this.record = this.inputs.getProp('record');
        this.project = this.inputs.getProp('project');
        this.modalHeading = this.record.id ? 'Edit Bug' : 'Add New Bug';

        if (! this.record.id && this.project.currentSprint) {
            this.record.sprint = this.project.currentSprint;
        }

    }

    async submit(form) {
        this.isSending = true;

        this.detectChanges();

        let updatedRecord;

        if (this.recordAudio.recordData) {
            let formData = new FormData(form);
            formData.append('record', this.recordAudio.recordData);
            form = formData;
        }

        if (! this.record.id) {
            let { record } = await this.service.create(form);

            updatedRecord = record;
        } else {    
            let { record } = await this.service.update(this.record.id, form);

            updatedRecord = record;
        }

        this.inputs.getEvent('save')(updatedRecord);
        this.modal.close();

        // this.isSending = false;
    }
}