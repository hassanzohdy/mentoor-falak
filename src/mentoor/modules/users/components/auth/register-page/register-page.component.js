class RegisterPage {
    // @macro(validateUserName)
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(authService, user, router) {
        this.name = 'register';
        this.title = 'Create new account';
        this.user = user;
        this.router = router;
        this.authService = authService;
        this.queryString = this.router.queryString;

        this.usernameRules = [
            '<strong>Username Rules</strong>',
            'Must starts with English letter (lowercase).',
            'Can contain only English letters, Numbers, dot or underscore.',
            'No more than one dot or underscore can be written after each other.',
            'No whitespaces allowed.',
        ];
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.invitationCode = this.queryString.get('invitationCode');
        this.errors = {
            email: null,
            password: null,
            username: null,
        };
        this.isValidForm = true;
        this.isRegistering = false;
        this.invalidLoginError = null;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}

    register(form) {
        this.isRegistering = true;
        this.authService.register(form).then(response => {
            this.user.login(response.user);
            this.router.navigateTo('/help');
        }).catch(response => {
            if (response.errors) {
                form.formHandler.setErrors(response.errors);
            } else if (response.error) {
                this.invalidLoginError = response.error;
            }
        });
    }
}