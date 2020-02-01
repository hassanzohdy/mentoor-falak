class HelpPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user) {
        this.name = 'help';
        this.title = 'Help';
        this.user = user;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.purchasableItems = [{
                price: null,
                description: 'Ask for help from Mentor, based on Mentor pricing',
            },
            // {
            //     price: 150000,
            //     description: `Unlock Einstein Chamber.`,
            // },
            {
                price: 3000000,
                description: `Request for online course.`
            },
            {
                price: 4000000,
                description: `Obtain $5.`
            },
            {
                price: 8000000,
                description: 'Purchase course from Udemy within $20',
            },
            {
                price: 8000000,
                description: 'Purchase any item from Envato market within $20',
            },
            {
                price: 15000000,
                description: 'Obtain $20',
            },
            {
                price: 20000000,
                description: 'Purchase course from Udemy within $40',
            },
            {
                price: 20000000,
                description: 'Purchase any item from Envato market within $40',
            },
            {
                price: 29000000,
                description: 'Obtain $40',
            },
        ];
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}