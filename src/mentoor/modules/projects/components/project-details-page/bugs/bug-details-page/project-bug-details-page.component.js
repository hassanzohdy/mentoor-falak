class ProjectBugDetailsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectBugsService, meta) {
        super(projectBugsService);
        this.meta = meta;
        this.name = 'project-bug-details';
        this.prependName = 'Bugs Details';
    }

    init() {
        this.isChangeable = true;
   
        this.query = {
            bug: this.router.params.bugId,
        };

        this.isValidForm = true;

        this.comment = '';

        super.init();
    }

    onProjectLoad() {
        this.prepareBug(this.project.bug);

        this.meta.setTitle('[Bug] ' + this.project.bug.title + ' | ' + this.project.name);

        if (this.project.bug.description) {
            this.meta.setDescription(this.project.bug.description);
        }

        if (! Is.empty(this.project.bug.attachments) && isImage(this.project.bug.attachments[0])) {
            this.meta.setImage(this.project.bug.attachments[0]);
        }
    }

    prepareBug(bug) {
        this.bug = bug;
        this.bug.isTester = this.bug.createdBy.id == this.user.id;

        this.bug.isAssignee = Boolean(
            Array.get(this.bug.assignee, assignee => assignee.id == this.user.id)            
        );
        
        this.bugCanBeEdited = this.bug.isTester || this.project.isHigherAuthority;

        this.isSuperiorUser = this.userIsTeamLeaderOf('softwareTesting') || this.project.isHigherAuthority;
    }

    getProperStatuses() {
        let items = [];
        // later: Change the displayed text in the dropdown, i.e: reopened: Reopen
        if (this.bug.status == 'active' || this.bug.status == 'reopened') {
            items = ['duplicated', 'rejected', 'notBug', 'deferred', 'inProgress', 'fixed'];
        } else if (this.bug.status == 'inProgress') {
            items = ['duplicated', 'rejected', 'notBug', 'deferred', 'fixed'];
        } else if (this.bug.status == 'deferred') {
            items = ['inProgress'];
        } else if (this.bug.status == 'fixed') {
            items = ['retesting'];
        } else if (this.bug.status == 'retesting') {
            items = ['reopened', 'verified', 'closed'];
        } else if (['duplicated', 'notBug', 'rejected'].includes(this.bug.status)) {
            items = ['verified', 'closed', 'reopened'];
        } 
        
        if (['verified', 'closed'].includes(this.bug.status)) {
            items = ['reopened'];
        }

        function getStatusText(status) {
            if (status == 'active') return 'Active';
            if (status == 'reopened') return 'Reopen';
            if (status == 'inProgress') return 'In Progress';
            if (status == 'retesting') return 'Retest';
            if (status == 'verified') return 'Verify';
            if (status == 'closed') return 'Close';

            return status.capitalize(1);
        }

        let translatedItems = [];

        items.unshift(this.bug.status);

        for (let status of items) {
            translatedItems.push({
                value: status,
                text: getStatusText(status),
            });
        }

        return translatedItems;
    }


    bugStatusCanBeChanged() {
        if (! this.isChangeable) return false;
        
        if (this.isSuperiorUser) return true;
        
        if (! this.bug.isAssignee && ! this.bug.isTester) return false;
        
        if (this.bug.isAssignee && ['active', 'reopened', 'deferred', 'inProgress'].includes(this.bug.status)) return true;
        
        if ((this.bug.isTester) && ['duplicated', 'rejected', 'notBug', 'retesting', 'fixed'].includes(this.bug.status)) return true;
        
        if (['verified', 'closed'].includes(this.bug.status)) return true;
        
        return false;
    }

    isRequiringValue() {
        if (['duplicated', 'rejected', 'notBug', 'deferred'].includes(this.newStatus)) return true;

        return false;
    }

    getConfirmingMessage() {
        if (['rejected', 'notBug', 'deferred'].includes(this.newStatus)) {
            return 'Please provide a reason.';
        }

        if (this.newStatus == 'duplicated') return 'Please write down the duplicated bug id.';

        return `Are you sure you want to change bug to ${this.newStatus}?`;
    }

    updateStatus(value) {
        this.service.updateStatus({
            bug: this.bug.id, 
            project: this.project.id,   
            status: this.newStatus,
            extra: value,
        }).then(response => {
            this.prepareBug(response.bug);
            this.isChangeable = true;
        });

        this.bug.status = this.newStatus;

        this.newStatus = null;
        this.isChangeable = false;
    }

    recache() {
        this.project.bug = this.bug;

        this.cache();
    }
}