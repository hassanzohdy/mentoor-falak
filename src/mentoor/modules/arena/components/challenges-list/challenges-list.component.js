class ChallengesList {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor(arenaChallengesService) {
    this.challengesService = arenaChallengesService;
   }

  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {
    this.isLoading = true;
    this.challenges = [];

    this.challengesService.list().then((res) => {
      this.challenges = res.records;

      this.isLoading = false;
    })
  }

  /**
   * The component is ready to do any action after being rendered in dom
   */
  ready() { }
}
