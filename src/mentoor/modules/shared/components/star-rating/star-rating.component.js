class StarRating {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor() {}

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {
    this.rateValue = 0;

    this.stars = Math.round(+this.prop("stars", 0));
    this.isReadOnly = this.prop("readonly", false);
    this.totalStars = this.prop("maxStars", 5);

    console.log(this.stars)

    this.starsRateArray = [];

    for (let i = 1; i <= this.totalStars; i++) {
      // check the number incoming and check if it's active
      this.starsRateArray.push({ active: false });
    }

    this.rateValue = this.stars;

    this.updateStyle(this.rateValue - 1);
  }

  rate(index) {
    if (this.isReadOnly) return;
    else {
      this.rateValue = +index + 1;

      this.updateStyle(index);

      // pass data to the parent component
      this.event("select")(this.rateValue);
    }
  }

  updateStyle(index) {
    this.starsRateArray.map((item, i) => (item.active = i <= index));
  }

  /**
   * The component is ready to do any action after being rendered in dom
   */
  ready() {}
}
