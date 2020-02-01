class TopicPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(meta, router, user, topicService, cache) {
        this.meta = meta;
        this.router = router;
        this.user = user;
        this.topicService = topicService;
        this.cache = cache;

        this.openAnswerText = false;
        this.approveMsg = {
            show: false,
            status: ''
        };

        this.startQuest = true;
        this.editMode = false;
        this.cancelBtn = false;
        this.currentUserAnswer;
        this.disableQuestBtn = false;
        this.btns = {
            'btn-primary': this.user.isLoggedIn(),
            'btn-danger': !this.user.isLoggedIn(),
        };

        this.name = 'topic';
        this.title = 'Topic';

        this.defaultAnswerDisplayMode = SEMI_DISPLAYED;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.answerData = '';
        this.isValidForm = true; // always init with true, the form validator will handle it later
        this.isSending = false;
        this.errors = {
            answer: null,
        };

        this.topic = {};
        this.trackSlug = this.router.params.track;
        this.topicSlug = this.router.params.topic;
        this.trackID = this.router.params.track;
        this.answerCacheKey = `topic-answer.${this.topicSlug}`;

        // if (this.cache.has('topic-' + this.topicSlug)) {
        //     this.setTopic(this.cache.get('topic-' + this.topicSlug));
        // }

        this.topicService.getTopic(this.trackSlug, this.topicSlug).then(response => {
            this.setTopic(response.record);
            // this.cache.set('topic-' + this.topicSlug, response.record);
        }).catch(e => {
            this.router.navigateTo('/academy');
        });
    }

    /**
     * Set the given topic as current topic
     * 
     * @param {object} topic
     */
    setTopic(topic) {
        this.topic = topic;
        this.title = this.topic.title;

        this.meta.setTitle(`[${this.topic.track.name}] ${this.topic.title}`)
            .setDescription(this.topic.shortDescription)
            .setImage(this.topic.track.image);

        this.answerData = this.cache.get(this.answerCacheKey);

        this.adjustTopic();

        if (!this.topic.answered || !this.topic.userAnswer) return;

        this.currentUserAnswer = this.topic.userAnswer;

        this.startQuest = false;
        this.approveMsg = {
            show: true,
            status: this.currentUserAnswer.status,
        };
        this.disableQuestBtn = true;
    }

    showQuestAnswer() {
        if (!this.user.isLoggedIn()) {
            return this.router.navigateTo('/login');
        }
        this.openAnswerText = !this.openAnswerText;
        if (this.openAnswerText === true) {
            this.btns = {
                'btn-primary': false,
                'btn-danger': true
            };
        } else {
            this.btns = {
                'btn-primary': true,
                'btn-danger': false
            };
        }
    }

    /**
     * Submit user answer
     * 
     * @param {HTMLFormElement} form 
     */
    async submitAnswer(form) {
        // instead of putting large code inside if condition
        // just reverse the condition and stop the function if not applied
        // if (!confirm('Are you want to send your answer ?')) return;

        if (!this.answerData) return alert('Empty answer!');

        this.isSending = true;
        this.startQuest = false;
        this.openAnswerText = false;

        let method = null,
            args = [];

        if (this.editMode) {
            method = 'editAnswer';
            args = [this.answerID, form];
        } else {
            method = 'applyAnswer';
            args = [this.topic.id, form];
        }

        // this.answerData = '';

        let { topic } = await this.topicService[method](...args);
        this.topic = topic;

        // clear the answer from the cache
        this.cache.remove(this.answerCacheKey);

        this.adjustTopic();

        this.isValidForm = true;
        this.openAnswerText = false;
        this.disableQuestBtn = true;
        this.cancelBtn = false;
        this.answerData = form.formHandler.value('answer');
        this.approveMsg = {
            show: true,
            status: 'pending'
        };
    }

    editAnswer(id, editedAnswer) {
        this.cancelBtn = true;
        this.editMode = true;
        this.answerID = id;

        if (!this.answerData) {
            this.answerData = editedAnswer;
        }

        this.openAnswerText = true;
        this.disableQuestBtn = false;
    }

    /**
     * adjust topic info
     */
    adjustTopic() {
        if (!Is.empty(this.topic.answers)) {
            this.topic.answers.forEach(answer => {
                answer.display = this.defaultAnswerDisplayMode;
            });
        }
    }

    /**
     * Store the user's answer while writing so he/she can get back to it later on    
     *    
     * @param  string answer
     * @returns void   
     */
    storeAnswer(answer) {
        this.cache.set(this.answerCacheKey, answer);
        this.answerData = answer;
    }

    /**
     * Handle answer display as it could be displayed, semi displayed or hidden
     * 
     * @param   {object} answer
     * @returns void
     */
    handleAnswerDisplay(answer) {
        if (answer.display === SEMI_DISPLAYED) {
            answer.display = DISPLAYED;
        } else if (answer.display === HIDDEN) {
            answer.display = SEMI_DISPLAYED;
        } else if (answer.display === DISPLAYED) {
            answer.display = HIDDEN;
        }

        this.detectChanges();
    }
}

const DISPLAYED = 'd';
const HIDDEN = 'h';
const SEMI_DISPLAYED = 'sd';