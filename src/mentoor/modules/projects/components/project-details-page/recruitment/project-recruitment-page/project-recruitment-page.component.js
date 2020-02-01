class ProjectRecruitmentPage extends Project {
    // @macro(mapUser)

    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor() {
        super();
        this.name = 'project-details-recruitment';
        this.prependName = 'Recruitment';

        this.fundPercentage = FLAGS.projects.pricing.recruitment.fundPercentage;

        this.acceptanceFundPercentageNote = `Acceptance Cost (${this.fundPercentage}% goes to project fund)`;
    }

    onProjectLoad() {
        this.project.maxVisibleMembers = this.project.maxMembers > this.project.members.length ?
            this.project.maxMembers :
            this.project.members.length;

        this.exceptMembers = this.project.members.map(member => member.member.id);
    }

    teamsList() {
        return this.project.teams.map(team => {
            return {
                text: team.type.capitalize() + ' Team',
                value: team.type,
            };
        });
    }

    titlesList() {
        let titles = [];

        for (let titleValue in FLAGS.projects.titles) {
            titles.push({
                value: titleValue,
                text: FLAGS.projects.titles[titleValue],
            });
        }

        return titles;
    }

    editRecruitment(recruitment, index) {
        this.currentRecruitment = recruitment;
        this.currentIndex = index;

        this.isSending = false;
        this.modalIsOpened = true;
    }

    openAddModal() {
        this.currentRecruitment = {
            title: '',
            team: '',
            role: '',
            experience: '',
            cost: '',
            fundPercentage: this.fundPercentage,
            reward: {
                onFinish: '',
                onDismiss: '',
                taskAverage: '',
            },
        };

        this.isSending = false;
        this.modalIsOpened = true;
    }

    async submit() {
        this.isSending = true;
        let project;
        if (this.currentRecruitment.id) {
            let { record } = await this.projectsService.updateRecruitment(this.project.id, this.currentRecruitment.id, this.form);

            project = record;
        } else {
            let { record } = await this.projectsService.openNewRecruitment(this.project.id, this.form);

            project = record;
        }

        this.boot(project);

        this.recruitmentModal.close();
    }

    async deleteRecruitment() {
        delete this.project.recruitment[this.currentIndex];
        let { record: project } = await this.projectsService.deleteRecruitment(this.project.id, this.currentRecruitment.id);

        this.boot(project);

        this.currentRecruitment = null;
    }

    openApplications(recruitment) {
        this.currentRecruitment = recruitment;

        this.openApplicationsModal = true;
    }
}