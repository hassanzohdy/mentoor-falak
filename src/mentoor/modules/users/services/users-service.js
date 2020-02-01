class UsersService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/users');
    }

    /**
     * Get top users
     * 
     * @returns Promise 
     */
    topUsers() {
        return this.endpoint.get(this.path(`/top-users`));
    }

    getByUserName(username) {
        return this.endpoint.get(this.path(`/${username}`));
    }
}

DI.register({
    class: UsersService,
    alias: 'usersService',
});