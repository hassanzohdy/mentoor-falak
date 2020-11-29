class FlkTimer {
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
        this.startsAt = this.inputs.getProp('startsAt');
        this.endsAt = this.inputs.getProp('endsAt');

        this.lostSeconds = 0;

        this.startCalculating();
    }

    startCalculating() {
        setInterval(() => {
            this.lostSeconds++;
            this.calculate();
        }, 1000);
    }

    calculate() {
        this.remaining = (this.endsAt - this.startsAt) - this.lostSeconds;

    }

    toDate(date) {
        // let formatElements = date.split(/-|\s|\:|_/g);

        return new Date(date.replaceAll('-', '/'))
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}