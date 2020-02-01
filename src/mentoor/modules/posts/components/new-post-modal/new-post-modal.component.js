class NewPostModal {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(cache, tagsService, postsService) {
        this.cache = cache;
        this.tagsService = tagsService;
        this.postsService = postsService;

        this.schema = {
            slug: null,
            title: null,
            image: null,
            content: null,
            tags: [],
        };
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.errors = {};
        this.modal = null;
        this.isSending = false;
        this.isValidForm = true;

        this.cachedPostValue = this.cache.get('t-post', ''); // t-post => timeline post

        this.onSave = this.inputs.getEvent('save');
        this.onClose = this.inputs.getEvent('close');
        this.data = this.inputs.getProp('post', this.schema);

        if (! this.data.content) {
            this.data.content = this.cachedPostValue;
        }

        this.heading = this.data.id ? `Edit ${this.data.title}` : 'Create new post';
    }

    /**
     * Submit form post
     */
    async submit(form) {
        this.isSending = true; 

        try {
            let response = this.data.id ? await this.postsService.update(this.data.id, form) : await this.postsService.create(form);

            this.cache.remove('t-post'); 

            this.onSave(response.record);
            this.modal.close();
        } catch (e) {
            echo(e);
        }
    }
}