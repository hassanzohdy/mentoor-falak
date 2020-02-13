class ChamperModerate {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, einsteinChamberService, adminUsersService) {
        this.user = user;
        this.einsteinChamberService = einsteinChamberService;
        this.adminUsersService = adminUsersService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.errors = {
            moderators: [],
        };

        let { categories } = await this.einsteinChamberService.shop();
        
        this.categories = categories.map(category => {
            return {
                text: category.name,
                value: category.id
            }
        });
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}