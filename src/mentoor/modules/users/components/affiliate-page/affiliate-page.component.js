class AffiliatePage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user) {
        this.user = user;
        this.name = 'affiliate';
        this.title = 'Affiliate Program';

        this.affiliateUrl = affiliateUrl(this.user);
        this.affiliateReward = 100000;
        this.requiredAnswers = 5;
    }

    /**
     * {@inheritdoc}
     */
    init() {
        this.copied = null;
    }
    
    /**
     * Copy the affiliate url for the user to clipboard
     */
    copyUrl() {
        try {            
            copyToClipboard(this.affiliateUrl);
            this.copied = true;
        } catch(e) {
            this.copied = false;
        }
    }
}