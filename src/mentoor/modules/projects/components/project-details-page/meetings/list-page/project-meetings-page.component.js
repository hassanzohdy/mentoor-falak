class ProjectMeetingsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectMeetingsService) {
        super(projectMeetingsService);
        this.name = 'project-details-meetings';
        this.prependName = 'Meetings';
        this.itemKey = 'meetings';
        this.query = {
            meetings: true,
        };
    }

    onProjectLoad() {
        this.membersList = this.project.members.map(member => {
            return {
                value: member.member.id,
                text: member.member.name,
            };
        });
    }

    meetingMembers() {
        if (! this.record.members) return;

        return this.record.members.map(member => member.id); 
    }

    meetingRepresentatives() {
        if (! this.record.clientRepresentatives) return;

        return this.record.clientRepresentatives.map(member => member.id); 
    }
}