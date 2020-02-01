class TopicsPage extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constradminTopicsServiceuctor parameters list  
     */
    constructor(adminTracksService, router, adminTopicsService) {
        super(adminTopicsService);
        this.tracksService = adminTracksService;
        this.name = 'topics';
        this.title = trans('topics-page');
        this.crudOptions = {
            columns: ['ID', 'Title', 'Public', 'Prize', 'Sort order', 'Control'],
            heading: 'topic',
            dataSchema: {
                title: null,
                slug: null,
                display: true,
                public: false,
                image: null,
                shortDescription: null,
                quest: null,
                prize: 10000,
            },
            orderBy: ['sortOrder', 'ASC'],
            sortable: 'topics',
        };
        this.router = router;
    }

    async init() {
        this.resetData();
        this.isLoading = true;
        this.items = null;
        this.trackId = this.router.params.trackID;
        let { record: track } = await this.tracksService.get(this.trackId);

        this.items = track.topics;
        this.orderItems(this.items);
        this.tableHeading = `${track.name} Topics`;
        this.isLoading = false;
    }
}