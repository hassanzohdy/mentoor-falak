class StarRating {
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
        this.rateValue = 0;

        this.starsLength = Math.round(+this.inputs.getProp('stars', 0));
        this.isReadOnly = this.inputs.getProp("readonly", false);
        this.totalStars = this.inputs.getProp("max-stars", 5);

        this.starsRateArray = [];

        for (let i = 1; i <= this.totalStars; i++) {
            this.starsRateArray.push({ active: false });
        }

        // Substracts one because it accepts index of array
        this.updateStyle(this.starsLength - 1);
    }

    rate(index) {
        if (this.isReadOnly) return;

        this.rateValue = +index + 1;

        this.updateStyle(index);

        // pass data to the parent component
        let selectEvent = this.inputs.getEvent("select");
        selectEvent(this.rateValue);
    }

    updateStyle(index) {
        this.starsRateArray.map((item, i) => {
            if (i <= index) {
                item.active = true;
            } else {
                item.active = false;
            }
        })
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}