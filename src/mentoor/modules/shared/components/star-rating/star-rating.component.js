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

        this.starsLength = Math.round(+this.prop('stars', 0));
        this.isReadOnly = this.prop("readonly", false);
        this.totalStars = this.prop("maxStars", 5);
        
        this.starsRateArray = [];

        for (let i = 1; i <= this.totalStars; i++) {
            // check the number incoming and check if it's active
            this.starsRateArray.push({ active: false });
        }

        this.updateStyle(this.starsLength - 1);
    }

    rate(index) {
        if (this.isReadOnly) return;
        else {
            this.rateValue = +index + 1;

            this.updateStyle(index);

            // pass data to the parent component
            this.event("select")(this.rateValue)
        }
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