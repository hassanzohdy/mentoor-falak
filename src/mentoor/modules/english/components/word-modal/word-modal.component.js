class WordModal {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, englishService) {
        this.user = user;
        this.englishService = englishService;
        this.schema = {
            word: null,
            image: null,
            published: false,
            description: null,
            pronunciation: null,
            translation: {
                word: null,
                pronunciation: null,
                description: null,
            },
            type: null,
            category() {
                let categorySchema = Object.merge(this, {
                    cost: 0,
                    incrementalCost: true,
                });

                delete categorySchema.category;

                return categorySchema;
            },
        }
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.isValidForm = true;
        this.isSending = false;
        this.type = this.inputs.getOption('type', 'word');
        // in case creating a word for a category
        this.category = this.inputs.getProp('category', null);
        this.data = this.inputs.getProp('record', this.getDefaultData());

        this.close = this.inputs.getEvent('close');
        this.onSave = this.inputs.getEvent('save');

        this.prepareHeading();
    }

    /**
     * Prepare heading based on passed type and data
     */
    prepareHeading() {
        this.heading = this.data.id ? `Edit ${this.type}` : `Add new ${this.type}`;
    }

    /**
     * Get default data
     */
    getDefaultData() {
        return this.type == 'category' ? Object.clone(this.schema.category()) : Object.clone(this.schema);
    }

    async submitThenClear() {
        let record;

        return;

        this.form.formHandler.validate();

        if (!this.isValidForm) return;

        this.isSending = true;

        let response = await this.englishService.create(this.form);
        record = response.record;

        this.isSending = false;

        this.onSave(record);

        this.data = this.getDefaultData();

        this.form.reset();

        this.imageInput.reset();
    }

    /**
     * Reset message
     */
    resetMessage() {
        setTimeout(() => {
            this.sent = null;
        }, 100);
    }

    /**
     * Submit form 
     */
    async submit(form) {
        let record;

        let uniqueWord = this.inputs.getEvent('validate', word => {
            return true;
        });

        this.unique = uniqueWord(this.data);

        if (!this.unique) {
            this.sent = false;
            return this.resetMessage();
        }

        this.isSending = true;

        if (this.data.id) {
            let response = await this.englishService.update(this.data.id, form);
            record = response.record;
            this.onSave(record);
            this.modal.close();
        } else {
            // let response = await this.englishService.create(form);
            // record = response.record;

            this.englishService.create(form).then(response => {
                this.onSave(response.record);
            });
        }

        this.sent = true;

        this.resetMessage();
        
        this.isSending = false;

        this.data = this.getDefaultData();

        form.reset();

        if (this.imageInput) {
            this.imageInput.reset();
        }
    }
}