class LayoutWrapper {
    /**
     * Constructor
     */
    constructor(user, meService) {
        this.user = user;
        this.meService = meService;
    }

    /**
     * {@inheritDoc}
     */
    init() {
        this.isSending = false;
        this.redeem = false;
        this.sidebar = this.inputs.getAttr('sidebar', 'default');
    }

    /**
     * Redeem user daily login reward
     */
    redeemDailyLoginReward() {
        this.isSending = true;

        playAudio(Sounds.COLLECT_COINS);

        this.meService.redeemDailyLoginReward().then(response => {
            response.user.dailyReward = null;
            this.user.update(response.user);
            this.dailyRewardModal.close();
        });
    }

    ready() {
    }
}