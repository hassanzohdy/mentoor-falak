class EinsteinPage extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(einsteinCategoriesService) {
        super(einsteinCategoriesService);
        this.name = 'admin-einstein-categories';
        this.title = trans('einstein-categories');
        this.crudOptions = {
            columns: ['ID', 'Name', 'Image', 'Puzzles', 'Cost', 'Required Answers', 'Control'],
            heading: 'Category', // it will be Add new track in the add button and the add modal, also it will be Edit track in the edit modal
        };
        this.tableHeading = "Einstein categories";
    }
}