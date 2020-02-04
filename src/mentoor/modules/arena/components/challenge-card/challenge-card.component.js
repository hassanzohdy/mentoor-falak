class ChallengeCard {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {
        
        
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.challenge = this.inputs.getProp("challenge");

        this.startTime = this.challenge.startsAt
        this.endTime = this.challenge.endsAt
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}