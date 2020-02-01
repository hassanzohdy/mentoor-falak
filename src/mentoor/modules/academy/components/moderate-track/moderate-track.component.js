class ModerateTrack {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, adminUsersService) {
        this.user = user;
        this.adminUsersService = adminUsersService;
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.track = this.inputs.getProp('track');
        this.errors = {
            moderators: [],
        };
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}