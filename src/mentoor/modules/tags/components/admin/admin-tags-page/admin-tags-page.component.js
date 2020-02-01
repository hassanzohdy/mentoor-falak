class AdminTagsPage  extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(adminTagsService) {
        super(adminTagsService);
        this.name = 'tags';
        this.title = 'Tags';
        this.crudOptions = {
            columns: ['ID', 'Tag', 'Image', 'Control'],
            heading: 'tag', 
            dataSchema: {
                name: null,
                image: null,
            },
        };

        this.tableHeading = "Tags";
    }

    ready() {}
}