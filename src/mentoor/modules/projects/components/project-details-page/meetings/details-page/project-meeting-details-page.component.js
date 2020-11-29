class ProjectMeetingDetailsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor() {
        super();
        this.name = 'project-meeting-details';
        this.prependName = 'Meetings Details';        
    }

    init() {
        this.query = {
            meeting: this.router.params.meetingId,
        };

        super.init();
    }

    onProjectLoad() {
        this.meeting = this.project.meeting;

        // let isMeetingMember = this.project.is.higherAuthority || collect(this.meeting.members).pluck('id').toArray().includes(this.user.id);

        // if (! isMeetingMember) {
        //     return this.router.navigateTo('/404');
        // }
    }
}