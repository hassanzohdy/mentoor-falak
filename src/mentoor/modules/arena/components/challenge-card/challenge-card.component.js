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
        echo(this.challenge)
    }

    /**
     * If the challenge is still hapenning
     */
    isChallengeLive() {
        return !this.challenge.isEnded && (Math.ceil(Date.now()/1000) >= this.challenge.startsAt.timestamp);
    }

    /**
     * If the challenge doesn't started yet 
     */
    isChallengeNotStarted() {
        return !this.challenge.isEnded && (Math.ceil(Date.now()/1000) < this.challenge.startsAt.timestamp);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}