class WordPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, router, englishService, meta) {
        this.name = 'word';
        this.title = 'Word';
        this.user = user;
        this.router = router;
        this.meta = meta;
        this.englishService = englishService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.wordSlug = this.router.params.word;
        this.requiresLogin = false;
        this.originalWords = null;
        this.nonPublishedOnly = false;

        this.wordsPerLine = window.screen.width <= 580 ? 1 : 2;

        if (!this.user.isLoggedIn()) {
            this.requiresLogin = true;
        }

        this.isLoading = true;

        try {
            let { record } = await this.englishService.get(this.wordSlug);

            this.word = record;

            this.defaultSort = 'Chronologically';

            this.meta.setTitle(`${this.word.word} - English As A Foreigner`);

            if (this.word.image) {
                this.meta.setImage(this.word.image);
            }
            
            if (this.word.description) {
                this.meta.setDescription(this.word.description);
            }

            if (this.word.words) {
                this.sortBy(this.defaultSort);
            }
        } catch (e) {
            if (e.statusCode == 400) {
                return this.router.navigateTo('/404');
            }
        }

        this.isLoading = false;
    }

    delete(word, index) {
        if (confirm('Are you sure?') === false) return;

        delete this.word.words[index];

        this.word.words = Array.reset(this.word.words);

        this.word.total.words--;

        this.englishService.delete(word.id);
    }

    sortBy(type) {
        let words = collect(this.word.words);
        if (type == 'Chronologically') {
            words = words.sortByDesc('id');
        } else if (type == 'Alphabetically') {
            words = words.sortBy('word');
        }

        this.word.words = words.toArray();

        this.detectChanges();
    }

    validateAsUnique(word) {
        let unique = true;

        if (Is.empty(this.word.words)) return unique;

        for (let categoryWord of this.word.words) {
            if (word.word.toLowerCase().trim() == categoryWord.word.toLowerCase().trim()) {
                unique = word.id == categoryWord.id;

                if (!unique) return false;
            }
        }

        return unique;
    }

    /**
     * Open modal
     */
    openModal(mode) {
        this.mode = mode;
        this.modalShouldBeOpened = true;
    }

    getWordRecord() {
        return this.mode == 'add' ? null : this.currentWord;
    }

    togglePublishedWords() {
        this.nonPublishedOnly = !!!this.nonPublishedOnly;

        if (!this.originalWords) {
            this.originalWords = this.word.words;
        }

        this.word.words = !this.nonPublishedOnly ? this.originalWords : this.originalWords.filter(word => !word.published);

        this.detectChanges();
    }

    adjustRecord(record) {
        if (this.mode == 'add') {
            if (!record.published) return;

            if (!this.word.words) {
                this.word.words = [];
            }

            this.word.total.words++;

            this.word.words.unshift(record);
        } else {
            this.currentWord = this.record;
        }
    }

    async purchaseCategory() {
        if (!this.user.isLoggedIn()) return alert('Please login first.');

        if (this.user.gold < this.word.cost) return alert('Insufficient gold');

        this.word.isUnlocked = true;

        playAudio(Sounds.PAY_COINS);
        this.user.update('gold', this.user.gold - this.word.cost);
        let response = await this.englishService.purchase(this.word.id);

        this.word = response.category;
        this.user.update(response.user);
    }
}