class RecordAudioInput {
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
        this.data = this.inputs.getProp('data', {});
        this.recordKey = this.inputs.getOption('key', 'recordNote');
    }

    /**
     * Capture the given record object
     * 
     * @param {object} record
     */
    captureRecord(record) {
        this.recordSrc = record.url;
        this.recordData = record.blob;

        this.inputs.getEvent('record')();

        this.detectChanges();
    }

    /**
     * Capture event on the recording start
     */
    onRecording() {
        this.data[this.recordKey] = null;this.clearRecord();
        
        this.inputs.getEvent('start')();
    }

    /**
     * Clear record info
     */
    clearRecord(withConfirm = false) {
        if (withConfirm && confirm('Are you sure?') === false) return;

        this.recordSrc = null;
        this.recordData = null;

        this.detectChanges();
    }
}