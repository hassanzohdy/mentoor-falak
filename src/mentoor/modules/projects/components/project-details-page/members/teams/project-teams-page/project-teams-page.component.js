class ProjectTeamsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(usersService) {
        super();
        this.name = 'project-details-teams';
        this.prependName = 'Teams';
        this.usersService = usersService;
    }

    onProjectLoad() {
        this.excludedTeams = this.project.teams.map(team => team.type);

        this.availableTeamLeaders = this.project.members.map(member => member.member);

        this.data = {
            teamLeader: {
                member: {
                    id: null,
                }
            }
        };
    }

    getTeams(teamType) {
        return FLAGS.projects.teams.filter(team => team.type ==teamType || !this.excludedTeams.includes(team)).map(team => {
            return {
                text: team.capitalize() + ' Team',
                value: team,
            };
        });
    }

    async submit(form, methodType) {
        this.isSending = true;
        if (methodType == 'add') {
            try {
                let { record } = await this.projectsService.addTeam(this.project.id, form);

                this.project = record;
            } catch (error) {
                console.log(error.error);
            }
        } else {
            try {
                let { record } = await this.projectsService.editTeam(this.project.id, this.data.id, form);

                this.project = record;
            } catch (error) {
                console.log(error.error);
            }
        }

        this.teamModal.close();
        this.isSending = false;
        this.onProjectLoad();
    }

    getTeamLeaderName(team) {
        return Object.get(Array.get(team.members, member => member.role == 'teamLeader'), 'member.name', 'N/a');
    }
}