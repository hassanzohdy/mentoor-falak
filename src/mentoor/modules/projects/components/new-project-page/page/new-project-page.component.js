class NewProjectPage {
    // @macro(mapUser)

    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, events, router, tagsService, usersService, projectsService) {
        this.user = user;
        this.events = events;
        this.router = router;
        this.tagsService = tagsService;
        this.usersService = usersService;
        this.projectsService = projectsService;
        this.name = 'new-project';
        this.title = 'Create New project';

        this.steps = [
            'Initiation',
            'Project members',
            // 'Building Teams',
            // 'Tasks Board',
            'Extras',
            // 'Finish',
        ];

        // this.currentStep = 0;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.currentStep = this.user.isLoggedIn() ? 0 : -1;
        // this.currentStep = 3;

        this.data = {
            name: null,
            about: null,
            for: 'business',
            fund: 0,
            startDate: '',
            endDate: '',
            image: null,
            types: ['website'],
            supervisors: [],
            membersSize: null,
            status: 'planning',
            extra: {
                tasksBoard: true,
                privacy: false,
                calendar: false,
                todoList: false,
                softwareTesting: false,
                milestones: false,
            },
            // max: 1,
        };

        this.isValidForm = true;
        this.isCreating = false;

        this.totalCost = {};

        this.projectMembers = {
            projectManager: null,
            supervisors: [],
            members: [],
        };

        if (this.user.isLoggedIn()) {
            this.projectMembers.projectManager = {
                text: this.user.name,
                value: this.user.id,
            };
        }

        this.sizes = [];

        if (!Is.empty(FLAGS)) {
            this.initInfo();
        } else {
            this.events.on('flags.sent', flags => {
                this.initInfo();
            });
        }
    }

    ready() {
        this.formHandler = this.form.formHandler;
    }

    next() {
        this.formHandler.validate();

        if (!this.formHandler.hasErrors()) {
            this.currentStep++;
        } else {
        }
    }

    prev() {
        this.currentStep--;
    }

    setExtra(extra, checked) {
        this.data.extra[extra] = checked;

        this.totalCost[extra.capitalize()] = this.projectInfo.pricing[extra];

        if (!checked) {
            delete this.totalCost[extra.capitalize()];
        }

        this.calculateTotal();
    }

    initInfo() {
        this.projectInfo = FLAGS.projects;
        this.totalCost.Basic = this.projectInfo.pricing.basic;

        for (let size in this.projectInfo.pricing.sizes) {
            this.sizes.push({
                text: size + ' members',
                value: size,
            });
        }

        if (this.sizesDropdown) {
            this.sizesDropdown.updateItems(this.sizes);
        }

        this.rolesList = [];

        for (let role in this.projectInfo.roles) {
            this.rolesList.push({
                value: role,
                text: this.projectInfo.roles[role],
            });
        }

        if (this.projectInfo.pricing.tasksBoard == 0) {
            this.totalCost.TasksBoard = this.projectInfo.pricing.tasksBoard;
        }

        this.calculateTotal();
    }

    setSupervisors(supervisors) {
        let supervisorsLimit = FLAGS.projects.limit.supervisor;

        this.projectMembers.supervisors = supervisorsLimit;

        this.totalCost.Supervisors = (supervisors.length - supervisorsLimit) * FLAGS.projects.pricing.extra.supervisor;

        if (this.totalCost.Supervisors == 0) {
            delete this.totalCost.Supervisors;
        }

        this.calculateTotal();
    }

    selectSize(size) {
        this.totalCost.MembersSize = this.projectInfo.pricing.sizes[size.value];
        this.maxTeamsPerSize = this.projectInfo.maxTeams[size.value];

        this.calculateTotal();
    }

    calculateTotal() {
        this.projectCost = Number(this.data.fund);

        for (let key in this.totalCost) {
            this.projectCost += this.totalCost[key];
        }

        this.finalCost = this.projectCost;

        if (Is.empty(this.user.projects)) {
            this.firstProjectDiscount = this.projectCost - this.data.fund;
            this.finalCost = this.data.fund;
        } 
    }

    costOf(type) {
        switch (type) {
            case 'basic':
                return FLAGS.projects.pricing.basic;
        }
    }

    async createProject(form) {
        this.isCreating = true;

        let { record, user } = await this.projectsService.create(form);

        this.user.update(user);

        this.router.navigateTo('/projects/' + record.id + '/members');
    }
}