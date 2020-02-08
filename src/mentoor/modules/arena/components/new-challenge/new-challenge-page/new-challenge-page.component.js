class NewChallengePage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(arenaService, tagsService, router) {
        this.name = 'new-challenge';
        this.title = trans('new-challenge');
        this.tagsService = tagsService;

        this.challenges = arenaService;

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
    }

    createChallenge(e, form) {
        e.preventDefault();

        this.isSending = true;

        this.challenges.create(form).then(res => {
            this.isSending = false;

            setTimeout(() => {
                this.router.navigateTo("/arena");
            }, 2000);
        }).catch(err => {
            echo(err);
            this.error = err;
        })
    }

    addQuestion(e, question) {
        e.preventDefault();

        if (question.trim() == "") return;

        this.questions.push({ question });

        this.questionItem.value = '';
    }

    removeQuestion(e, index) {
        e.preventDefault();

        this.questions.splice(index, 1);

        this.detectChanges();
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}