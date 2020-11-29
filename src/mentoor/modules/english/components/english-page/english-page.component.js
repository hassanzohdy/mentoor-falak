class EnglishPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, db, router, englishService) {
        this.name = 'english';
        this.title = 'English';
        this.db = db;
        this.user = user;
        this.router = router;
        this.englishService = englishService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.data = {};

        this.defaultSort = 'Chronologically';

        this.totalWords = null;

        this.isLoading = true;

        this.db.get('english', () => {
            return this.englishService.list({
                type: 'category',
            });
        }, this.db.recache).then(response => {
            this.response = response.records;

            this.sortBy(this.defaultSort);

            this.totalWords = this.categories.reduce((total, category) => {
                if (category.total) {
                    total += category.total.words;
                }
                return total;
            }, 0);

            this.isLoading = false;
        });
    }

    sortBy(type) {
        let categories = collect(this.response);
        if (type == 'Chronologically') {
            categories = categories.sortByDesc('id');
        } else if (type == 'Alphabetically') {
            categories = categories.sortBy('word');
        }
        this.categories = categories.toArray();
    }

    /**
     * Open modal
     */
    openModal(mode, index) {
        this.mode = mode;
        this.modalShouldBeOpened = true;
        this.index = index;
    }

    adjustRecord(record) {
        if (this.mode == 'add') {
            this.categories.unshift(record);
        } else {
            // this.currentCategory = record;
            this.categories[index] = record;
        }
        this.currentCategory = null;
    }

    async purchaseCategory() {
        if (!this.user.isLoggedIn()) return alert('Please login first.');

        if (this.user.gold < this.currentCategory.cost) return alert('Insufficient gold');

        this.currentCategory.isUnlocked = true;

        playAudio(Sounds.PAY_COINS);
        this.user.update('gold', this.user.gold - this.currentCategory.cost);
        let response = await this.englishService.purchase(this.currentCategory.id);

        this.currentCategory = response.category;
        this.user.update(response.user);
    }
}