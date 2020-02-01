class EinsteinCategoryCard {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, einsteinChamberService) {
        this.user = user;
        this.einsteinChamberService = einsteinChamberService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.category = this.inputs.getProp('category');
    }


    /**
     * Determine if user can unlock the current category
     * 
     * @returns boolean
     */
    canUnlock() {
        return !this.categoryIsUnlocked(this.category) && this.user.gold >= this.category.cost && this.user.total.academy.answers.approved >= this.category.requiredAnswers;
    }

    /**
     * Check if the current category is unlocked by user
     * 
     * @returns boolean
     */
    categoryIsUnlocked() {
        return this.user.einsteinChamber.categoriesIds.includes(this.category.id);
    }

    /**
     * Unlock the current category
     */
    async purchase() {
        if (!this.canUnlock(this.category)) {
            return alert('Did not match category requirements.');
        }

        if (confirm(`Are you sure you want to purchase ${this.category.name}?`) === false) return;

        this.isPurchasing = true;

        try {
            let response = await this.einsteinChamberService.purchase(this.category.id);
            this.user.update(response.user);
            this.isPurchasing = false;
        } catch (response) {
            echo(response);
        }
    }
}