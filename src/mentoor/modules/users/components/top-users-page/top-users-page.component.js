class TopUsersPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(usersService, user) {
        this.user = user;
        this.usersService = usersService;
        this.name = 'top-users';
        this.title = 'Top Users';
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;
        let response = await this.usersService.topUsers();

        this.users = response.users;
        
        this.isLoading = false;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}