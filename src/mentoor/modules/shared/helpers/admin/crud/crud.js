// Now we want this class to handle all the CRUD operations for an extended one
// so we need to pass to this class the service object that will be called
// therefore the service property will be abstract name such as `this.service` so it will handle any service 
// now regarding the loaded data from the service, we 'll set a fixed property called `this.records` 
// to store all data coming from service inside it  
class CRUD {
    constructor(service) {
        this.service = service;
        // this is just a placeholder to know what data should be set when you define it in the child class
        this.crudOptions = {
            columns: [],
            heading: '',
            dataSchema: {},
            sortable: null, // for sorting
        };
        this.hideAddBtn = false;
        this.tableHeading = '';

        this.recordable = false; // if set to true, then the modal will contain a recorder 
        this.recordName = null;

        this.sortableService = DI.resolve('sortableService');
    }


    /**
     * Capture the given record object
     * 
     * @param {object} record
     */
    captureRecord(record) {
        this.recordSrc = record.url;
        this.recordData = record.blob;
    }

    /**
     * Clear record info
     */
    clearRecord(withConfirm = false) {
        if (withConfirm && confirm('Are you sure?') === false) return;

        this.recordSrc = null;
        this.recordData = null;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;
        this.items = null; //reset data
        this.resetData();

        if (this.recordable) {
            this.clearRecord();
        }

        let { records } = await this.service.list();

        this.items = records;

        this.orderItems(this.items);
        this.isLoading = false;
        if (this.onLoadingRecords) {
            this.onLoadingRecords();
        }

    }

    orderItems(items) {
        if (!this.crudOptions.orderBy) return;

        let [column, order] = this.crudOptions.orderBy;

        order = order.toUpperCase();

        let collectableItems = collect(items);

        this.items = (order == 'ASC' ? collectableItems.sortBy(column) : collectableItems.sortByDesc(column)).toArray();
    }

    ready() {
        if (!this.crudOptions.sortable) return;

        let table = document.getElementsByTagName('tbody')[0];

        var sortable = Sortable.create(table, {
            scroll: true, // Enable the plugin. Can be HTMLElement.
            // scrollFn: function (offsetX, offsetY, originalEvent, touchEvt, hoverTargetEl) {  }, // if you have custom scrollbar scrollFn may be used for autoscrolling
            // scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
            // scrollSpeed: 10, // px, speed of the scrolling
            bubbleScroll: true, // apply autoscroll to all parent elements, allowing for easier movement
            onEnd: e => {
                let itemId = e.item.id,
                    sortOrder = e.newIndex + 1;
                // this.sortableService.sort({
                //     type: this.crudOptions.sortable,
                //     sortOrder,
                //     itemId,
                // });

                let rows = Array.from(table.querySelectorAll('tr')).map((row, index) => {
                    return {
                        itemId: row.id,
                        type: this.crudOptions.sortable,
                        sortOrder: index + 1,
                    };
                });

                this.sortableService.sortAll(rows);
            }
        });
    }

    /**
     * Reset all data when user closes the modal, or on page init
     * 
     * @returns void
     */
    resetData() {
        this.errors = {};
        this.submitting = false;
        this.isValidForm = true;
        this.openModal = false;
        this.editMode = false;
        this.formObject = {};
    }

    /**
     * Submit the given form and create or update record based on the current edit mode
     * 
     * @param  HtmlFormElement form
     * @returns void
     */
    async submit(form) {
        this.submitting = true;
        if (this.beforeSubmitting) {
            form = this.beforeSubmitting(form) || form;
        }

        if (this.recordable && this.recordData) {
            let formData = new FormData(form);
            formData.append(this.recordName, this.recordData);
            form = formData;
        }

        if (this.editMode) {
            await this.service.update(this.formObject.id, form);
        } else {
            await this.service.create(form);
        }

        if (this.modal) {
            this.modal.close();
        }

        this.init();
    }

    /**
     * Open the modal to edit the  given item data
     * 
     * @param  object item
     * @returns void
     */
    editItem(item) {
        this.openModal = true;
        this.editMode = true;
        this.formObject = item;
    }

    /**
     * Delete the given item id
     * 
     * @param  int itemId
     * @returns void
     */
    async deleteItem(itemId, index) {
        if (confirm(trans('are-you-sure')) === false) return;

        await this.service.delete(itemId);

        if (index) {
            delete this.items[index];
            this.items = Array.reset(this.items);
        }
    }

    /**
     * Close the opened modal
     * 
     * @returns void
     */
    closeModal() {
        this.resetData();
    }
}