class ProjectsPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, shareable, projectsService) {
        this.user = user;
        this.shareable = shareable;
        this.projectsService = projectsService;
        this.name = 'projects';
        this.title = 'Projects';
    }

    /**     
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;

        this.shareable.unshare('project', null);

        let { records } = await this.projectsService.list();

        this.projects = records.map(project => {
            projectDeadline(project);            

            return project;
        });

        this.tags = collect(this.projects.reduce((tags, project) => {
            return tags.concat(project.tags || []);
        }, [])).unique('id').toArray();

        this.statuses = collect(this.projects).pluck('status').unique().toArray();

        const members = [];

        this.members = this.projects.reduce((members, project) => {
            return members.concat((project.members || []).map(member => member.member));
        }, []).filter(member => {
            if (members.includes(member.id)) return false;

            members.push(member.id);

            return true;
        });

        this.filteringText = '';

        this.filter('');

        this.isLoading = false;
    }

    filter(search, type = 'name') {
        if (!search) {
            this.projectsList = [].concat(this.projects);
            return;
        }

        this.filteringText = search;

        let exceptions = ['tag', 'member', 'name'];

        this.projectsList = this.projects.filter(project => {
            let matched = true;
            if (type === 'name') {
                matched = matched && Boolean(project.name.match(new RegExp(search, 'i')));
            }

            if (type == 'tag') {
                matched = matched && Boolean((project.tags || []).find(tag => Number(tag.id) == Number(search)));
            }

            if (type == 'member') {
                matched = matched && Boolean((project.members || []).find(member => Number(member.member.id) == Number(search)));
            }

            if (!exceptions.includes(type) && project[type]) {
                matched = matched && project[type] === search;
            }

            return matched;
        });
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}