class ProjectMembersPage extends Project {
    // @macro(mapUser)

    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(usersService, projectsService) {
        super(projectsService);
        this.name = 'project-details-members';
        this.prependName = 'Members';
        this.itemKey = 'members';
        this.usersService = usersService;
    }

    onProjectLoad() {
        this.project.maxVisibleMembers = this.project.maxMembers > this.project.members.length ?
                                        this.project.maxMembers :
                                        this.project.members.length;

        this.exceptMembers = this.project.members.map(member => member.member.id);

        this.positionsList = [
            'backendDeveloper',
            'frontEndDeveloper',
            'fullStackDeveloper',
            // 'angularDeveloper',
            // 'reactJsDeveloper',
            // 'laravelDeveloper',
            // 'opencartDeveloper',
            // 'wordpressDeveloper',
            // 'codeigniterDeveloper',  
            'androidDeveloper',
            'iosdDeveloper',
            'flutterdDeveloper',
            'reactNativeDeveloper',
            'softwareTester',
            'graphicDesigner',
            'motionGraphicDesigner',
            'supervisor',
            'systemAnalyst',
            'productOwner',
            'projectManager',
            'customerService',
            'sales',
            'marketeer',
        ];

        this.data = {
            position: '',
        }
    }

    async addNewMember(form) {
        this.isSending = true;

        let { record: project } = await this.projectsService.addNewMember(this.project.id, form);

        this.boot(project);

        this.addMemberModal.close();

        this.isSending = false;
    }
    
    remove() {
        Object.remove(this.project, this.itemKey + '.' + this.index);
        Object.set(this.project, this.itemKey, Array.reset(Object.get(this.project, this.itemKey)));

        this.service.dismissMember(this.project.id, this.record.member.id).then(({project}) => {
            this.project = project;

            this.onProjectLoad();
        });

        this.index = null;
        this.record = null;
    }
}