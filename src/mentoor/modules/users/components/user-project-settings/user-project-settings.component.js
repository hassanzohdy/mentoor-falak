class UserProjectSettings {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, meService) {
        this.user = user;
        this.meService = meService;
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {}

    /**
     * The component is ready to do any action after being rendered in dom
     */
    update(form) {
        this.isSaving = true;
        this.meService.updateProfile(form).then(response => {
            this.user.update(response.user);
            this.isSaving = false;
            this.successMessage = true;
        });
    }
}