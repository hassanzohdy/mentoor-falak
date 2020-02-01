class CocktailModal {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(cache, user, cocktailsService, cocktailCategoriesService, meService) {
        this.user = user;
        this.cache = cache;
        this.meService = meService;
        this.cocktailsService = cocktailsService;
        this.cocktailCategoriesService = cocktailCategoriesService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;

        this.onUnlock = this.inputs.getEvent('unlock');

        this.displayedCocktails = [];

        this.currentCategory = null;

        this.close = this.inputs.getEvent('close');

        if (this.cache.has('cocktails')) {
            let categories = this.cache.get('cocktails-categories');
            this.setCocktails(this.cache.get('cocktails'), categories);
            this.display(categories[0]);
        }

        let { records: cocktails } = await this.cocktailsService.list();

        let { records: cocktailsCategories } = await this.cocktailCategoriesService.list();

        this.setCocktails(cocktails, cocktailsCategories);
    }

    setCocktails(cocktails, cocktailsCategories) {
        this.originalCocktails = cocktails;
        this.cocktailsCategories = collect(cocktailsCategories).sortBy('sortOder').toArray();

        this.prepareCocktails();

        this.isLoading = false;
        this.cache.set('cocktails', cocktails);
        this.cache.set('cocktails-categories', cocktailsCategories);

        if (!this.currentCategory) {
            this.display(cocktailsCategories[0]);
        }
    }

    async unlockCocktail() {
        let cocktail = this.hasCocktailToBeUnlocked;

        cocktail.unlocked = true;

        playAudio(Sounds.PAY_COINS);

        this.user.update('gold', this.user.gold - cocktail.cost);

        Array.pushOnce(this.user.trainingGround.cocktailsIds, cocktail.id);

        this.prepareCocktails();

        this.display(this.currentCategory);

        let response = await this.meService.unlockCocktail(cocktail.id);

        this.onUnlock(cocktail);

        this.user.update(response.user);
    }

    prepareCocktails() {
        this.cocktails = this.originalCocktails.map(cocktail => {
            cocktail.unlocked = !this.user.trainingGround ? false : this.user.trainingGround.cocktailsIds.includes(cocktail.id);

            if (cocktail.unlocked) return cocktail;

            cocktail.canBeUnlocked = this.user.gold > cocktail.cost;

            let requiredCocktailsIds = cocktail.requiredCocktails.map(cocktail => cocktail.id);

            if (Is.empty(cocktail.requiredCocktails)) return cocktail;

            requiredCocktailsIds.map(cocktailId => {
                if (cocktail.canBeUnlocked == false) return;
                cocktail.canBeUnlocked = this.user.trainingGround ? this.user.trainingGround.cocktailsIds.includes(cocktailId) : false;
            });

            return cocktail;
        });
    }

    categoryHasCocktailsToUnlock(category) {
        let hasUnlockableCocktails = false;

        this.cocktails.filter(cocktail => cocktail.category.id == category.id).forEach(cocktail => {
            if (hasUnlockableCocktails === true) return;

            hasUnlockableCocktails = cocktail.canBeUnlocked && !cocktail.unlocked;
        });

        return hasUnlockableCocktails;
    }

    /**
     * Display current 
     * @param {*} category 
     */
    display(category) {
        this.displayedCocktails = collect(this.cocktails).filter(cocktail => cocktail.category.id == category.id).sortByDesc('sortOrder').toArray();
        this.currentCategory = category;
    }

    isLocked(cocktail) {
        return cocktail.cost == 0 ? false : !this.user.trainingGround ? true : !this.user.trainingGround.cocktailsIds.includes(cocktail.id) && !cocktail.canBeUnlocked;
    }
}