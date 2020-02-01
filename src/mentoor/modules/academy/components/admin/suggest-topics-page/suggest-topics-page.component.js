class SuggestTopicsPage extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(adminTracksSuggestTopicsService) {
        super(adminTracksSuggestTopicsService);
        this.name = 'suggest-topics';
        this.title = 'Suggest topics';
        this.crudOptions = {
            columns: ['ID', 'Track', 'By', 'Title', 'Reward', 'Control'],
            heading: 'track',
            dataSchema: {
                title: null,
                reward: 0,
                shortDescription: 0,
            },
        };
        this.tableHeading = "Suggest topics";
        this.statusesList = [
            'pending',
            'approved',
            'rejected',
        ];
    }
}
