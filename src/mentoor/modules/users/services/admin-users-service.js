class AdminUsersService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/users');
    }

    /**
     * Give reward
     * 
     * @param   {integer} userId
     * @param   {any} data
     * @returns Promise
     */
    giveReward(userId, data) {
        return this.endpoint.post(this.path(`/${userId}/give-reward`), data);
    }
}

DI.register({
    class: AdminUsersService,
    alias: 'adminUsersService',
});