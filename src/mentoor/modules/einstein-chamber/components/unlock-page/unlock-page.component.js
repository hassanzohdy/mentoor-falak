class EinsteinChamberUnlocker {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(router, user, einsteinChamberService) {
        this.user = user;
        this.router = router;
        this.einsteinChamberService = einsteinChamberService;
        this.name = 'einstein-chamber';
        this.title = 'Einstein Chamber';
        this.requiredAnswers = 15;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.disabledButton = false;
    }

    /**
     * Unlock the chamber
     */
    async unlock() {
        if (confirm('Are you sure you want to unlock Einstein Chamber?') === false) return;

        if (this.user.total.academy.answers.approved < this.requiredAnswers) {
            return alert(`You need to answer at least ${this.requiredAnswers} topics!`);
        }

        this.disabledButton = true;

        try {
            let response = await this.einsteinChamberService.unlock();

            this.user.update(response.user);

            this.router.navigateTo('/einstein-chamber/shop');
        } catch (response) {
        }
    }
}