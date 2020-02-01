class DashboardPage {
    /**
     * Constructor
     */
    constructor(tracksService, user, meService, cache) {
        this.name = 'dashboard';
        this.tracks = [];
        this.user = user;
        this.data = false;
        this.title = this.siteName = 'Dashboard';
        this.tracksService = tracksService;
        this.meService = meService;

        this.answersOrder = {
            rejected: 1,
            approved: 2,
            pending: 3,
        };

        this.initialized = false;

        this.answers = [];

        this.topics = [];
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = false;

        this.isLoadingPosts = true;

        if (!this.user.isLoggedIn()) return;

        if (! this.initialized) {
            this.isLoading = true;
        }

        let [tracksResponse, answersResponse] = await Promise.all([this.tracksService.getUserTracks(), this.meService.tracksAnswers()]);

        this.tracks = tracksResponse.records;

        this.topics = [];
        this.answers = [];

        this.initialized = true;
        // get only the topics that were not answered by current user

        this.tracks.forEach(track => {
            let trackTopics = track.topics.filter(topic => topic.answered === false).map(topic => {
                topic.track = {
                    id: track.id,
                    name: track.name,
                    slug: track.slug,
                };
                return topic;
            });

            this.topics = this.topics.concat(trackTopics);
        });

        let answers = collect(answersResponse.answers).sortByDesc('id').groupBy('status').all();

        for (let status in answers) {
            this.answers.push({
                status,
                answers: answers[status].map(answer => (answer.display = false, answer)).toArray(),
            });
        }

        this.answers = this.answers.sort((answersA, answersB) => {
            return this.answersOrder[answersA.status] - this.answersOrder[answersB.status];
        });

        this.activeTab = 0;

        this.isLoading = false;
    }

    async loadPosts() {
        if (! this.posts) {
            this.isLoadingPosts = true;
        }

        let response = await this.meService.posts();
        this.posts = response.records;
        this.isLoadingPosts = false;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
    }
}