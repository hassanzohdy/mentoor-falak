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

        this.starsLength = +this.inputs.getOption('stars');

        echo(this.starsLength)

        this.starsRateArray = [];

        for (let i = 1; i <= this.starsLength; i++) {
            this.starsRateArray.push({ active: false });
        }
    }

    rate(index) {
        this.rateValue = +index + 1;

        this.updateStyle(index);
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