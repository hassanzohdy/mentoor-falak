class TaskChecklist {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(taskChecklistsService, taskChecklistItemsService) {    
        this.taskChecklistsService = taskChecklistsService;    
        this.taskChecklistItemsService = taskChecklistItemsService;    
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.isValidForm = true;
        this.addChecklistForm = false;
        this.task = this.inputs.getProp('task');
    }

    addNewChecklist() {
        this.addChecklistForm = true;

        this.isValidForm = true;

        this.items = [];

        this.items.push('');

        this.checklistName = `Checklist ${this.task.checklists.length + 1}`;
    }

    async submitChecklist(form) {
        this.isSending = true;
        if (this.currentItem) {
            let {record: checklist} = await this.taskChecklistsService.update(this.currentItem.id, form);

            this.task.checklists[this.index] = checklist;

            this.currentItem = false;

            this.isInEditMode = false;
        } else {
            let {record: checklist} = await this.taskChecklistsService.create(form);

            this.task.checklists.push(checklist);    
        }

        this.isSending = false;
        this.addChecklistForm = false;
    }

    suggestCheckItemModification(item) {
        this.modifyingChecklistItem = item;

        this.isSuggestingItemControl = true;
    }
    
    unsuggestCheckItemModification() {
        this.modifyingChecklistItem = null;

        this.isSuggestingItemControl = false;
    }

    changeItemStatus(item, done) {
        item.done = done;
        this.taskChecklistItemsService.changeStatus(item.id, Number(done));
    }

    addChecklistItem(checklist, index) {
        this.currentChecklist = checklist;

        this.currentChecklistIndex = index;

        this.isAddingChecklistItem = true;
    }

    async submitItem(form) {
        this.isSending = true;
        let {record: item} = await this.taskChecklistItemsService.create(form);

        this.currentChecklist.items.push(item);

        this.isSending = false;
        this.isAddingChecklistItem = false;

        // this.task.checklists[this.currentChecklistIndex] = this.currentChecklist;
    }

    allowEditing(checklist, index, type) {
        this.currentItem = checklist;
        this.index = index;
        this.type = type;
        this.isInEditMode = true;
    }

    confirmRemoving(checklist, index, type, checklistItem = null, checklistItemIndex = null) {
        this.currentItem = checklist;
        this.index = index;
        this.type = type;
        this.checklistItem = checklistItem;
        this.checklistItemIndex = checklistItemIndex;
        this.isAboutToRemove = true;
    }

    /**
     * Remove checklist or checklist item based on current type
     */
    remove() {
        if (this.type == 'checklist') {
            this.taskChecklistsService.delete(this.currentItem.id);

            delete this.task.checklists[this.index];

            this.task.checklists = Array.reset(this.task.checklists);
        } else {
            this.taskChecklistItemsService.delete(this.checklistItem.id);

            // remove from the checklist
            delete this.currentItem.items[this.checklistItemIndex];

            this.currentItem.items = Array.reset(this.currentItem.items)

            // this.task.checklists[this.index] = ;
        }
    }
}