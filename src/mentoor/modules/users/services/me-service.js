class MeService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/me');
    }

    /**
     * Get current user answers
     * 
     * @returns Promise
     */
    tracksAnswers() {
        return this.endpoint.get(this.path('/academy/answers'));
    }

    /**
     * Get current user's tracks
     */
    tracks() {
        return this.endpoint.get(this.path('/academy/tracks'));
    }

    /**
     * Get current user's einstein categories
     */
    einsteinCategories() {
        return this.endpoint.get(this.path('/einstein/unlocked-categories'));
    }

    /**
     * Get current user info
     */
    info() {
        return this.endpoint.get(this.path(''));
    }

    /**
     * Redeem user's daily login reward
     */
    redeemDailyLoginReward() {
        return this.endpoint.patch(this.path('/redeem-daily-login-reward'));
    }

    /**
     * Unlock chat rooms
     * 
     * @param  {any} data
     * @returns Promise
     */
    unlockChatRooms(data) {
        return this.endpoint.post(this.path('/unlock-chat-rooms'), data);
    }

    /**
     * Mark the given notification id as seen
     * 
     * @param   {number} notificationId
     * @returns Promise 
     */
    markNotificationAsSeen(notificationId) {
        return this.endpoint.patch(this.path('/notifications/seen/' + notificationId));
    }

    /**
     * Remove the given notification
     */
    removeNotification(notificationId) {
        return this.endpoint.delete(this.path('/notifications/' + notificationId));
    }

    /**
     * Remove all notifications
     */
    removeAllNotifications() {
        return this.endpoint.delete(this.path('/notifications'));
    }

    /**
     * Get rewards list
     * 
     * @returns Promise
     */
    rewardsList() {
        return this.endpoint.get(this.path('/rewards'));
    }

    /**
     * Get user notifications list
     * 
     * @returns Promise
     */
    NotificationsList() {
        return this.endpoint.get(this.path('/notifications'));
    }

    /**
     * Redeem reward 
     * 
     * @returns Promise
     */
    redeemReward(rewardId) {
        return this.endpoint.patch(this.path('/rewards/redeem/' + rewardId));
    }

    redeemAllRewards() {
        return this.endpoint.patch(this.path('/rewards/redeem/all'));
    }

    /**
     * Get user tasks
     * 
     * @returns Promise
     */
    tasks() {
        return this.endpoint.get(this.path('/tasks'));
    }

    /**
     * Unlock todo list
     * 
     * @returns Promise
     */
    unlockTodoList() {
        return this.endpoint.patch(this.path('/todo/unlock'));
    }

    /**
     * Get user supervising tasks
     * 
     * @returns Promise
     */
    supervisingTasks() {
        return this.endpoint.get(this.path('/tasks/supervising'));
    }

    updateVersion(version) {
        return this.endpoint.patch(this.path(`/version/` + version));
    }

    updateProfile(form) {
        return this.endpoint.put(this.path('/update'), form);
    }

    unlockCocktail(cocktailId) {
        return this.endpoint.patch(this.path('/cocktails/unlock/' + cocktailId));
    }

    cocktailsList() {
        return this.endpoint.get(this.path('/cocktails'));
    }

    trainingGroundsList() {
        return this.endpoint.get(this.path('/cocktails/training-grounds'));
    }

    chatRooms() {
        return this.endpoint.get(this.path('/chat-rooms'));
    }

    posts() {
        return this.endpoint.get(this.path('/posts'));
    }
}

DI.register({
    class: MeService,
    alias: 'meService',
});