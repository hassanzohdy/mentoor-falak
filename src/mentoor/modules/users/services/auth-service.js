class AuthService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.authorizable = null;
    }

    /**
     * Send a login request
     * 
     * @param FormHandler form
     * @returns Promise 
     */
    login(form) {
        return this.endpoint.post(this.path('/login'), form);
    }

    /**
     * Log the user out
     */
    logout() {
        return this.endpoint.get(this.path('/logout'));
    }

    /**
     * Send a register request
     * 
     * @param FormHandler form
     * @returns Promise 
     */
    register(form) {
        return this.endpoint.post(this.path('/register'), form);
    }

    /**
     * Send a forget password email
     * 
     * @param string email
     */
    forgetPassword(email) {
        return this.endpoint.post(this.path('/forget-password'), {
            email
        });
    }

    /**
     * Reset user password
     * 
     * @param string code
     * @param FormHandler form
     */
    resetPassword(form) {
        return this.endpoint.post(this.path('/reset-password'), form);
    }
}

DI.register({
    class: AuthService,
    alias: 'authService',
});