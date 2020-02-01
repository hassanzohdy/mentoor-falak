class TrackCard {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user) {
        this.user = user;        
        this.track = null; // the passed track object
    }

    init() {
        this.track = this.inputs.getProp('track');
    }

    /**
     * Determine if user can subscribe to that track
     * 
     * @returns bool
     */
    isSubscriable() {
        return this.user.isLoggedIn() && ! this.user.academy.tracksIds.includes(this.track.id) && this.user.gold >= this.track.cost;
    }
}