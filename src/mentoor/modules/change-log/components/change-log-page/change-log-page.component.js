class ChangeLogPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, changeLogService, meService) {
        this.name = 'change-log';
        this.title = 'Change log';

        this.user = user;
        this.meService = meService;
        this.changeLogService = changeLogService;
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;

        let response = await this.changeLogService.list();

        this.changeLogs = response.records;

        this.changeLogs = collect(this.changeLogs).sortByDesc('id').toArray();

        if (this.user.id != 1) {
            this.changeLogs = this.changeLogs.filter(changeLog => changeLog.published == true);
        }

        if (this.user.isLoggedIn() && this.changeLogs[0].published && this.user.version != this.changeLogs[0].version) {
            this.user.version = this.changeLogs[0].version;
            this.meService.updateVersion(this.changeLogs[0].version).then(response => {
                this.user.update(response.user);
            });
        }

        this.isLoading = false;

        this.schema = {
            version: null,
            log: null,
            releaseDate: '',
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    openModal(mode, data = Object.clone(this.schema), index) {
        this.data = data;
        this.currentIndex = index;

        this.heading = mode == 'add' ? 'Add new change log' : 'Edit change log';
        this.modalShouldBeOpened = true;
    }

    async submit(form) {
        if (this.data.id) {
            let response = await this.changeLogService.update(this.data.id, form);
            this.changeLogs[this.currentIndex] = response.record;

        } else {
            let response = await this.changeLogService.create(form);
            this.changeLogs.unshift(response.record);
        }

        this.modal.close();
    }
}