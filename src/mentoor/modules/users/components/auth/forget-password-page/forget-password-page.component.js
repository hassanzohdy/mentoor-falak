class ForgetPasswordPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(authService, router, shareable) {
        this.name = 'forget-password';
        this.errors = {
            email: null,
            password: null,
        };
        this.errorMsg = null;
        this.isValidForm = true;
        this.isForgot = false;
        this.authService = authService;
        this.router = router;
        this.shareable = shareable;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {}

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}

    forgetPass(form) {
        this.errorMsg = null;
        this.isForgot = true;
        let email = form.formHandler.value('email')
        this.authService.forgetPassword(email).then(response => {
            this.shareable.share('forget-password-email', email);
            this.router.navigateTo('/reset-password');
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