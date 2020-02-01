class ProjectTeamDetailsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor() {
        super();
        this.name = 'project-details-teams-members';
        this.prependName = 'Teams Members';
    }

    init() {
        this.currentTeamType = this.router.params.team;
        this.newTeamLeaderId = null;
        super.init();
    }

    onProjectLoad() {
        this.currentTeam = Array.get(this.project.teams, team => team.type == this.currentTeamType);

        this.currentTeam.maxVisibleMembers = this.currentTeam.maxMembers > this.currentTeam.members.length ? 
                                             this.currentTeam.maxMembers :   
                                             this.currentTeam.members.length;

        let teamLeader = Array.get(this.currentTeam.members, member => member.role == 'teamLeader');
        this.currentTeamLeaderId = teamLeader ? teamLeader.member.id: null;

        // team members that could be a team leader of current team 
        this.teamMembersExceptTeamLeader = this.currentTeam.members.filter(member => member.member.id != this.currentTeamLeaderId).map(member => member.member);


        this.teamExceededMaxFreeMembers = this.currentTeam.members.length >= this.currentTeam.maxMembers;

        let teamMembersIds = collect(this.currentTeam.members).map(member => member.member).pluck('id').toArray();

        this.projectMembersExceptTeamMembers = this.project.members.filter(member => ! teamMembersIds.includes(member.member.id)).map(member => member.member);
    }

    assignTeamLeader(form) {
        let sameTeamLeader = false;
        // make the current team leader a member
        // make the selected member as new team leader  
        for (let team of this.project.teams) {
            if (team.type != this.currentTeam) continue;

            for (let member of team.members) {
                if (member.role == 'teamLeader') {
                    if (member.member.id == this.newTeamLeaderId) {
                        sameTeamLeader = true;
                        break;
                    }
                    member.role = 'member';
                }

                if (member.member.id == this.newTeamLeaderId) {
                    member.role = 'teamLeader';
                }
            }
        }

        this.teamModal.close(); 

        // send only if the bloody project manager didn't select same team leader
        if (sameTeamLeader) return;

        this.projectsService.assignTeamLeader(this.project.id, this.currentTeam.id, form).then(response => {
            this.boot(response.record);
        });
    }

    addTeamMember(form) {
        let member = this.getMember(this.newMember);

        this.currentTeam.members.push(member);

        this.newMember = null;

        this.teamMemberModal.close();

        this.projectsService.addNewTeamMember(this.project.id, this.currentTeam.id, form).then(response => {
            this.boot(response.record);
        });
    }
}