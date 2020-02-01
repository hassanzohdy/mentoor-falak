class TutorialMakerSeriesPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {
        this.name = 'tutorial-maker-series';
        this.title = trans('tutorial-maker-series-page');
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.series = [
            'Higher Order Functions',
            'Pure Functions',
            'Recursion',
            'Currying',
            'Functors',
            'Monads',
        ];

        this.done = ['Higher Order Functions'];
        this.current =  'Pure Functions';
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}