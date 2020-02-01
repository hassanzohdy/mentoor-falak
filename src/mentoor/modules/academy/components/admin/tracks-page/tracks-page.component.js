class TracksPage extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(adminTracksService) {
        super(adminTracksService);
        this.name = 'admin-tracks';
        this.title = trans('tracks-page');
        this.crudOptions = {
            columns: ['ID', 'Image', 'Track name', 'Topic Suggestions', 'Sort order', 'Display', 'Topics', 'Cost', 'Control'],
            heading: 'track', 
            dataSchema: {
                name: null,
                slug: null,
                cost: 0,
                description: null,
                suggestTopic: {
                    requires: 0,
                    reward: 0,
                },
            },
            orderBy: ['sortOrder', 'ASC'],
            sortable: 'tracks',
        };
        this.tableHeading = "Tracks";
    }
}