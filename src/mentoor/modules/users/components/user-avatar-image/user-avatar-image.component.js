class UserAvatarImage {
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
        // as the endsAt property is not in the html template, then the observer won't observe it
        // therefore we'll ask the observer to do it manually
        // whenever the endsAt value is changed we'll start again the time calculator
        this.handler.onChange('user', user => {
            this.setUserInfo(user);
        }).observe('user');

        this.userInfo = Object.clone(this.prop('user', {}));

        this.position = this.prop('position');

        this.setUserInfo(this.prop('user'));
    }

    setUserInfo(user) {    
        if (Is.empty(user) || ! user.id) return;

        this.userInfo = user;

        let names = this.userInfo.name.split(/\s|-/);

        let firstName = names.shift();
        let lastName = names.pop();

        this.initialsOnly = [firstName, lastName].map(name => (name || '')[0]).join('').toUpperCase();
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}