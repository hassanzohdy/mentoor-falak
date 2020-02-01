class AdminCocktailsCategoryPage extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(adminCocktailsCategoriesService) {
        super(adminCocktailsCategoriesService);
        this.name = 'admin-cocktails-categories';
        this.title = 'Cocktails categories';
        this.crudOptions = {
            columns: ['ID', 'Name', 'Icon','Display', 'Sort order', 'Control'],
            heading: 'Cocktail', 
            dataSchema: {
                name: null,
                icon: null,
                display: true,
                sortOrder: 0,
            },
        };
        
        this.tableHeading = "Cocktail categories";
    }
}