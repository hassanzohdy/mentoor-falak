class EnglishTopParticipantsPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(englishService) {
        this.name = 'english-top-participants';
        this.title = 'English Top Participants';

        this.englishService = englishService;
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;

        let response = await this.englishService.topParticipants();

        this.participants = collect(response.participants).sortByDesc(participant => {
            return participant.total.word;
        }).toArray();

        this.isLoading = false;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}