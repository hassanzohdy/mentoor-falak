class UsersPage extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(adminUsersService, user, router) {
        super(adminUsersService);
        this.user = user;
        this.router = router;

        this.name = 'users';
        this.title = trans('users-page');
        this.crudOptions = {
            columns: ['ID', 'Name', 'Gold', 'Created', 'Email', 'Account type', 'Control'],
            heading: 'User'
        };
        this.tableHeading = "Users";
        this.accountTypes = ['admin', 'user']; // as long as this is not going to be changed, then put it here

        this.rewardsReasons = [
            'reportingIssue',
            'complement',
        ];
    }

    openAsUser(user) {
        this.service.requestAccessTokenFor(user.id).then(response => {
            user.accessToken = response.accessToken;
            let accessToken = user.accessToken;
            this.user.update(user);
            this.user.refreshAccessToken(accessToken);
            this.router.navigateTo('/');    
        });
    }

    /**
     * Give a new reward complement for current user
     * @param {HTMLFormElement} form 
     */
    giveReward(form) {
        this.disableSubmit = true;
        this.service.giveReward(this.rewardedUser.id, form);

        this.rewardedUser = null;

        this.disableSubmit = false;
    }
}