class EinsteinChamberShop {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(einsteinChamberService, user) {
        this.user = user;
        this.einsteinChamberService = einsteinChamberService;
        this.name = 'einstein-shop';
        this.title = 'Einstein Shop';
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;
        this.isPurchasing = false;

        let shop = await this.einsteinChamberService.shop();

        // sort categories by the purchased first, then by the can be unlocked, lastly the rest unlocked categories
        this.categories = shop.categories.sort((categoryA, categoryB) => {
            let categoriesIds = this.user.einsteinChamber.categoriesIds;
            if (categoriesIds.includes(categoryA.id) === categoriesIds.includes(categoryB.id)) {
                if (this.canUnlock(categoryA) === this.canUnlock(categoryB)) {
                    return 0;
                } else if (this.canUnlock(categoryA)) {
                    return -1;
                } else {
                    return 1;
                }
            } else {
                return categoriesIds.includes(categoryA.id) ? -1 : 1;
            }
        });

        this.isLoading = false;
    }

    /**
     * Determine if user can unlock the given category
     * 
     * @param {object} category 
     * @returns boolean
     */
    canUnlock(category) {
        return ! this.categoryIsUnlocked(category) && this.user.gold >= category.cost && Object.get(this.user, 'total.academy.answers.approved') >= category.requiredAnswers;
    }

    /**
     * Check if the given category is unlocked by user
     * 
     * @param {object} $category 
     * @returns boolean
     */
    categoryIsUnlocked(category) {
        return this.user.einsteinChamber.categoriesIds.includes(category.id);
    }
}