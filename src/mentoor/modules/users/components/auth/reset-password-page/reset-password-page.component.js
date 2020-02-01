class ResetPasswordPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(authService, user, shareable, router) {
        this.name = 'reset-password';
        this.shareable = shareable;
        this.authService = authService;
        this.user = user;
        this.router = router;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.errors = {
            email: null,
            password: null,
        };

        this.errorMsg = null;
        this.isValidForm = true;
        this.isReset = false;
        this.email = this.shareable.pullShared('forget-password-email');
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}

    resetPass(form) {
        this.errorMsg = null;
        this.isForgot = true;
        this.authService.resetPassword(form).then(response => {
            this.user.login(response.user);
            this.router.navigateTo('/');
        }).catch(response => {
            this.isForgot = false;
            if (response.errors) {
                form.formHandler.setErrors(response.errors);
            } else if (response.error) {
                this.errorMsg = response.error;
            }
        });
    }
}