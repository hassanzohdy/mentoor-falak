class AdminCocktailPage extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(adminCocktailService, tagsService, adminCocktailsCategoriesService) {
        super(adminCocktailService);
        this.tagsService = tagsService;
        this.adminCocktailsCategoriesService = adminCocktailsCategoriesService;
        this.title = 'Cocktails';
        this.name = 'admin-cocktail';
        this.crudOptions = {
            columns: ['ID', 'Name', 'Category', 'Icon', 'Cost', 'Tags', 'Display', 'Sort order', 'Control'],
            heading: 'Cocktail', 
            dataSchema: {
                name: null,
                category: {
                    id: null,
                },
                description: null,
                icon: null,
                cost: 0,
                display: true,
                sortOrder: 0,
                tags: [],
                requiredCocktails: [],
            },
        };
        
        this.tableHeading = "Cocktail";
    }
}