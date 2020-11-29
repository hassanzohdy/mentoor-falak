class AdminTrainingGroundPage extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(adminTrainingGroundService, tagsService, adminCocktailService) {
        super(adminTrainingGroundService);
        
        this.tagsService = tagsService;
        this.adminCocktailService = adminCocktailService;

        this.name = 'admin-training-ground';
        this.title = 'Training ground';
        
        this.crudOptions = {
            columns: ['ID', 'title', 'Image', 'Live Preview', 'Prize',  'Cocktail', 'dependsOn', 'Level', 'Sort order', 'Display', 'Control'],
            heading: 'training ground', 
            dataSchema: {
                title: null,
                description: null,
                shortDescription: null,
                livePreview: null,
                image: null,
                prize: 0,
                display: true,
                sortOrder: 0,
                level: null,
                dependsOn: {

                },
                cocktail: {
                    id: null,
                },
                tags: [],
            },
        };

        this.levels = [
            'Beginner',
            'Intermediate',
            'Advanced',
        ];
        
        this.tableHeading = "Training ground";
    }
}