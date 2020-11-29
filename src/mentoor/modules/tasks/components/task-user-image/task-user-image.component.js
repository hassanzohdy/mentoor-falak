class TaskUserImage {
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
        this.userInfo = Object.clone(this.prop('user', {}));

        if (Is.empty(this.userInfo)) return

        let names = this.userInfo.name.split(/\s|-/);

        let firstName = names.shift();
        let lastName = names.pop();

        this.initialsOnly = [firstName, lastName].map(name => name[0]).join('').toUpperCase();
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}