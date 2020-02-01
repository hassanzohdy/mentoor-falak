class ProfilePage {
    // @macro(validateUserName)
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, router, meService) {
        this.user = user;
        this.router = router;
        this.meService = meService;
        this.name = 'profile';
        this.title = this.user.name;

        this.affiliateUrl = affiliateUrl(this.user);

        this.homePages = {
            '/tasks': 'Tasks Board', 
            '/timeline': 'Timeline', 
            '/dashboard': 'Dashboard', 
            '/projects/me': 'My Projects', 
        };
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.isUpdating = false;
        this.errors = {};
        this.copied = null;
        this.isLoading = false;
        this.tracks = [];
        this.einsteinCategories = [];

        this.tempUserName = this.user.lastName;

        if (!this.user.firstName) {
            this.user.firstName = this.user.name;
        }

        this.currentInput = {
            name: null,
            value: null,
        };
    }

    ready() {
        this.activePanel = this.router.hash() || 'overview-tab';

        let navItem = this.form.querySelector(`[data-target="#${this.activePanel}"]`);

        if (navItem) {
            navItem.click();
        }
    }

    /**
     * Check if user requires to change his/her name
     * 
     * @returns bool
     */
    requireNameChange() {
        return ! this.user.name.includes(' ');
    }

    /**
         * Get user academy tracks
         */
    async loadTracks() {
        if (!Is.empty(this.user.tracks)) {
            this.tracks = this.user.tracks;
        } else {
            this.isLoading = true;
        }

        let response = await this.meService.tracks();

        this.tracks = response.records;

        this.isLoading = false;

        this.user.update('tracks', this.tracks);
    }

    /**
     * Get user einstein categories
     */
    async loadEinsteinCategories() {
        if (!Is.empty(this.user.einsteinCategories)) {
            this.einsteinCategories = this.user.einsteinCategories;
        } else {
            this.isLoading = true;
        }

        let response = await this.meService.einsteinCategories();

        this.einsteinCategories = response.records;

        this.isLoading = false;

        this.user.update('einsteinCategories', this.einsteinCategories);
    }

    getUserImage() {
        return userImage(this.user);
    }

    /**
     * Update user profile
     * 
     * @param   {HTMLFormElement} form
     */
    async updateProfile(form) {
        this.isUpdating = true;

        try {
            let response = await this.meService.updateProfile(form);

            this.user.update(response.user);

            this.tempUserName = this.user.lastName;

            this.updateMessage = 'Profile has been updated successfully';

            this.editMode = null;
            this.inEditMode = null;
        } catch (e) {
            form.formHandler.setErrors(e.errors);
        }
        
        this.isUpdating = false;
    }
}