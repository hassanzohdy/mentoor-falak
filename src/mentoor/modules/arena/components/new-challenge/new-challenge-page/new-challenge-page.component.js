class NewChallengePage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(arenaChallengesService, tagsService, router) {
        this.name = 'new-challenge';
        this.title = trans('new-challenge');
        this.tagsService = tagsService;

        this.challenges = arenaChallengesService;

        this.router = router;
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.questions = [];

        this.data = {};

        this.levelItems = [
            { text: "Beginner", value: "beginner" },
            { text: "Intermediate", value: "intermediate" },
            { text: "Advanced", value: "advanced" }
        ]

        this.typeItems = [
            { text: "Code", value: "code" },
            { text: "Quiz", value: "quiz" }
        ]

        this.isSending = false;

        this.question = '';
    }

    createChallenge(form) {

        this.isSending = true;
        echo(this.challenges);
        this.challenges.create(form).then(res => {
            this.isSending = false;
            echo(res)
            this.router.navigateTo(URLS.arena(res.record.id));
        }).catch(err => {
            echo(err);
            this.error = err;
        });
    }

    addQuestion() {
        this.questions.push({ question: this.question });

        this.question = '';
    }

    removeQuestion(index) {

        this.questions.splice(index, 1);

        this.detectChanges();
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}