class TrackDetailsPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(meta, router, tracksService, user, cache) {
        this.meta = meta;
        this.user = user;
        this.router = router;
        this.cache = cache;
        this.tracksService = tracksService;

        this.name = 'track';
        this.title = 'Track';
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.suggestTopicTitle = '';
        this.errors = {};
        this.isValidForm = true;
        this.isSubmittingTopicSuggestion = false;
        this.topicSuggestionHasBeenSent = false;
        this.totalAnsweredTopics = 0;
        this.suggestTopic = false;
        this.disableBtn = false;
        this.myTopicsList = {}; // to get topic answer from it for current user
        this.track = {};
        let trackSlug = this.router.params.track;

        if (this.cache.has('track-' + trackSlug)) {
            // this.setTrack(this.cache.get('track-' + trackSlug));
        }

        this.isSubscribing = false;
        this.tracksService.getTrack(trackSlug).then(response => {
            this.setTrack(response.record);
            // this.cache.set('track-' + trackSlug, response.record);
        });
    }

    /**
     * Submit topic suggestion
     * 
     * @param   {HTMLFormElement} form
     * @returns void
     */
    suggestNewTopic(form) {
        this.isSubmittingTopicSuggestion = true;
        this.tracksService.suggestTopic(this.track.id, form).then(response => {
            this.suggestTopic = false;
            this.topicSuggestionHasBeenSent = true;
            this.isSubmittingTopicSuggestion = false;
            
            setTimeout(() => {
                this.topicSuggestionHasBeenSent = false;
            }, 8000);
        });
    }

    /**
     * Open suggestion section for user
     */
    openSuggestionSection() {
        if (! this.userCanSuggestNewTopics) return;

        this.suggestTopic = true;
    }

    /**
     * Set the given track 
     * 
     * @param {object} track 
     */
    setTrack(track) {
        this.track = track;
        this.title = this.track.name;
        // display unanswered topics first then order topics by id ASC 
        this.track.topics = this.track.topics.sort((topicA, topicB) => {
            return topicB.answered == topicA.answered ? topicA.sortOrder - topicB.sortOrder : (topicA.answered ? 1 : -1);
        });

        let totalAnsweredTopics = this.track.topics.reduce((accumulator, topic) => {
            if (topic.answered && topic.userAnswer.status === 'approved') accumulator++;
            
            return accumulator;
        }, 0);

        this.meta.setTitle(this.track.name)
                 .setDescription(this.track.description)
                 .setImage(this.track.image);   

        this.totalAnsweredTopics = totalAnsweredTopics;

        this.userCanSuggestNewTopics = this.totalAnsweredTopics >= this.track.suggestTopic.requires;
    }

    /**
     * Get topic reward
     * If user answered topic and answer is approved then display the user reward for that topic
     * otherwise, display topic reward
     * 
     * @param   topic
     * @returns float 
     */
    getTopicReward(topic) {
        if (! topic.answered || ! topic.userAnswer) return topic.prize;

        let userAnswer;

        topic.answers.forEach(answer => {
            if (answer.by.id == this.user.id) {
                userAnswer = answer;
                return false;
            }
        });

        return userAnswer.status == 'approved' ? userAnswer.prize : topic.prize;
    }

    /**
     * Style topic based on current user topic answer status
     * 
     * @param   object topic
     * @returns object
     */
    styleTopicBasedOnUserAnswer(topic) {
        if (! topic.answered || ! topic.userAnswer) return {};

        let classing = {
            status: true,
        };

        classing[topic.userAnswer.status] = true;

        return classing;
    }

    subscribeToTrack() {
        if (! this.user.isLoggedIn()) {
            this.router.navigateTo('/login');
            return;
        }
        if (this.user.gold < Number(this.track.cost)) {
            playAudio(Sounds.NOT_ENOUGH_GOLD_RANDOM());
            alert('You don\'t have enough gold');
            return;
        }
        
        this.isSubscribing = true;
        this.tracksService.applyToTrack(this.track.id).then(response => {
            playAudio(Sounds.PAY_COINS);
            this.user.update('gold', response.gold);
            this.track = response.record;
            this.isSubscribing = false;
        }).catch(e => {
            this.isSubscribing = false;
        });
    }

    /**
     * Get current user topic answer
     * 
     * @param   object topic
     * @returns object
     */
    myTopicAnswer(topic) {
        if (this.myTopicsList[topic.id]) return this.myTopicsList[topic.id];

        let answer = collect(topic.answers).first(answer => answer.by.id == this.user.id);

        return this.myTopicsList[topic.id] = answer;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}
