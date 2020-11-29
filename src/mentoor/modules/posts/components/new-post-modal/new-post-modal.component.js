class NewPostModal {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(db, cache, tagsService, postsService) {
        this.db = db;
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

        this.onSave = this.event('save');
        this.onClose = this.event('close');
        this.data = Object.clone(this.prop('post', this.schema));

        this.seriesTitle = `
            <div class="bold">Post Series</div>
            <p>Adding a 'Series' name to your posts, will group all posts that have the same series name</p>

            <div>
                <strong>Series Name</strong>: 
                Set the series name that will group all posts with the sane name, name MUST BE in lowercase. 
            </div>

            <div>
                <strong>Series Order Number</strong>: 
                Setting the post number in the series order, the series will be sorted in ascendant order, which means the post with series order 1 will be displayed at first, and so on.
            </div>
        `;

        if (! this.data.content) {
            this.data.content = this.cachedPostValue;
        }

        if (! this.data.series) {
            this.data.series = {
                name: '',
                order: '',
            };
        }

        this.heading = this.data.id ? `Edit ${this.data.title}` : 'Create new post';
    }

    /**
     * Submit form post
     */
    async submit(form) {
        this.isSending = true; 

        try {
            let response = this.data.id ? 
                           await this.postsService.update(this.data.id, form) : 
                           await this.postsService.create(form);

            this.cache.remove('t-post'); 

            this.db.set(`post-${response.record.id}`, response.record);

            this.onSave(response.record);
            this.modal.close();
        } catch (e) {
        }
    }
}