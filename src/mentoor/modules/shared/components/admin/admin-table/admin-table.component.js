class AdminTable {
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
        this.columns = this.inputs.getProp('columns');
        this.tableHeading = this.inputs.getOption('tableHeading');
        this.hideAddBtn = this.inputs.getProp('hideAddBtn');
        this.addHeading = this.inputs.getOption('addHeading');
        this.records = this.inputs.getProp('records', []);
    }

    addNewItem() {
        let parent = this.inputs.parent;
        parent.openModal = true;
        parent.editMode = false;
        parent.formObject = Object.clone(parent.crudOptions.dataSchema);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}