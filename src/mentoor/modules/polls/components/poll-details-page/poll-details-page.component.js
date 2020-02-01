class PollDetailsPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, router, pollsService) {
        this.user = user;
        this.router = router;
        this.pollsService = pollsService;
        this.name = 'poll-details';
        this.title = 'polls';
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.poll = null;
        this.isLoading = true;
        this.answersIds = [];
        this.currentAnswer = null; // for single answer voting
        this.votingConfirm = null;

        try {
            let { record: poll } = await this.pollsService.get(this.router.params.id);

            this.preparePoll(poll);

            this.isLoading = false;
        } catch (response) {
        }
    }

    preparePoll(poll) {
        this.poll = poll;
        this.poll.userHasVoted = this.poll.voters.includes(this.user.id);

        this.poll.answers = this.poll.answers.map(answer => {
            answer.displayedVotes = answer.votes.slice(0, 5);
            answer.remainingVotes = answer.votes.length - 5;
            return answer;
        });

        this.poll.totalVotes = collect(this.poll.votes).sum('votes');

        this.title = this.poll.title;
    }

    voteAnswer(answer) {
        if (this.poll.allowMultipleVotes === false) {
            return this.currentAnswer = answer.id;
        }

        if (this.answersIds.includes(answer.id)) {
            this.answersIds = Array.remove(this.answersIds, answer.id);
        } else {
            this.answersIds.push(answer.id);
        }

        this.detectChanges();
    }

    async vote() {
        this.poll.userHasVoted = true;
        let { poll } = await this.pollsService.vote(this.poll.id, this.form);

        this.preparePoll(poll);
    }

    async closePoll() {
        // this.poll.closed = true;
        let { poll } = await this.pollsService.close(this.poll.id);

        this.preparePoll(poll);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}