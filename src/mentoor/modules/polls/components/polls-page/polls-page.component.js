class PollsPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(router, pollsService) {
        this.name = 'polls';
        this.title = trans('polls');
        this.router = router;
        this.pollsService = pollsService;

        this.booleans = [{
            text: 'No',
            value: '0',
        }, {
            text: 'Yes',
            value: 1,
        }];
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        let { records } = await this.pollsService.list();

        this.polls = records;
    }

    async submit(form) {
        this.isCreating = true;
        let { record: poll } = await this.pollsService.create(form);

        this.router.navigateTo(URLS.poll(poll));
    }

    openNewPoll() {
        this.newPoll = true;

        this.answersList = ['', '']; // minimum two answers
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}