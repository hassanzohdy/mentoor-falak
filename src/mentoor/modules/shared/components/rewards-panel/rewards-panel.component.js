class RewardsPanel {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, meService) {
        this.user = user;
        this.meService = meService;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    async init() {
        this.isLoading = true;

        let response = await this.meService.rewardsList();

        this.rewards = response.rewards;

        this.user.total.rewards = this.rewards.length;

        this.user.update('total', this.user.total);

        this.isLoading = false;
    }

    redeemAll() {
        this.meService.redeemAllRewards().then(response => {
            this.user.update('gold', response.gold);
        });

        this.user.total.rewards = 0;

        playAudio(Sounds.COLLECT_COINS);

        this.rewards.forEach(reward => {
            this.user.gold + reward.gold;

            userSocket.toSelf('rewards.redeemed', reward);
        });

        this.rewards = [];
    }

    /**
     * Redeem reward
     * 
     * @param   object reward
     * @param   int index 
     */
    redeemReward(reward, index) {
        this.meService.redeemReward(reward.id).then(response => {
            this.user.update('gold', response.gold);
        });

        this.user.update('gold', this.user.gold + reward.gold);

        this.rewards.splice(index, 1);

        // this.user.total.rewards--;

        playAudio(Sounds.COLLECT_COINS);

        userSocket.toSelf('rewards.redeemed', reward);

        this.detectChanges();
    }
}

DI.register({
    class: RewardsPanel,
    alias: 'rewardsList',
});