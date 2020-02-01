class AdminPostsPage extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(tagsService, adminPostsService) {
        super(adminPostsService);
        this.tagsService = tagsService;
        this.name = 'admin-posts';
        this.title = trans('tracks-page');
        this.crudOptions = {
            columns: ['ID', 'Title', 'image', 'Prize', 'status', 'tags', 'Control'],
            heading: 'post', 
            dataSchema: {
                title: null,
                slug: null,
                status: null,
                prize: 0,
                description: null,
                tags: [],
            },
            // orderBy: ['sortOrder', 'ASC'],
            // sortable: 'tracks',
        };
        this.tableHeading = "Posts";
        this.answerStatus = ['pending', 'approved', 'rejected'];
    }
}