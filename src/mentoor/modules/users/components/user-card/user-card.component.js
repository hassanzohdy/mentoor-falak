class UserCard {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(usersService) {
        this.usersService = usersService;

        document.addEventListener('click', e => {
            let currentEvent = e;

            if (this.userCard == currentEvent.target || this.userCard.contains(currentEvent.target)) return;

            this.close();
        });
    }

    close() {
        this.inputs.getEvent('close')();
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = false;
        this.user = this.inputs.getOption('user');
        this.username = this.inputs.getOption('username');

        if (!this.user) {
            let user = this.cachedUser('username', this.username);
            if (this.username && user) {
                this.user = user;
            } else {
                this.isLoading = true;
                let { record: user } = await this.usersService.getByUserName(this.username);
                this.user = user;
                this.isLoading = false;
                UserCard.loadedUsers.push(user);

                this.dc();
            }
        } else {
            if (!this.cachedUser('id', this.user.id)) {
                UserCard.loadedUsers.push(this.user);
            }
        }
    }

    cachedUser(column, value) {
        return Array.get(UserCard.loadedUsers, user => user[column] == value);
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}

UserCard.loadedUsers = [];