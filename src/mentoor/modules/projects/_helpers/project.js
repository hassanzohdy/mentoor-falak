class Project {
    constructor(service) {
        this.service = service;
        this.user = DI.resolve('user');
        this.router = DI.resolve('router');
        this.shareable = DI.resolve('shareable');
        this.projectsService = DI.resolve('projectsService');
        this.session = DI.resolve('session');
        this.title = '';
        this.query = null;
        this.defaultSchema = {};
    }

    queryOptions() {
        return {};
    }

    async init() {
        let projectId = this.router.params.id;
        this.isLoading = true;
        this.modalIsOpened = false;
        this.isValidForm = true;

        if (! this.query) {
            this.query = this.queryOptions();
        }

        this.project = null;

        // if (this.project && this.itemKey) {
        //     delete this.project[this.itemKey];
        // }

        if (this.session.has('project') && !this.forceLoad) {
            let project = this.session.get('project');

            // if (project.id == projectId && (!this.itemKey || this.itemKey && project[this.itemKey])) {
            //     this.boot(project);
            //     if (this.stopExecuting) return;
            // }
        }

        // if (this.shareable.isSharing('project')) {
        //     let project = this.shareable.getShared('project');

        //     if (project.id == projectId && (!this.itemKey || this.itemKey && project[this.itemKey])) {
        //         this.boot(project);
        //     }
        // }

        try {
            let { record } = await this.projectsService.get(projectId, this.query);

            if (!record) {
                return this.router.navigateTo('/404');
            }

            this.boot(record);

            if (this.stopExecuting) return;

            if (!this.project) return;

            // check for privacy
            if (!this.project.isPublic && !this.project.isMember) {
                return this.router.navigateTo('/projects');
            }

            this.isLoading = false;
        } catch (response) {
            if (response.statusCode == 400) {
                this.router.navigateTo('/404');
            }
        }
    }

    getTitle(title) {
        return FLAGS.projects.titles[title];
    }

    boot(project) {
        this.projectMembers = project.members.map(member => {
            return {
                text: member.member.name + ' (' + member.role + ')',
                value: member.member.id,
            }
        });

        project.isMember = Boolean(
            Array.get(project.members, member => member.member.id == this.user.id)
        );

        project.supervisors = project.members.filter(member => member.role == 'supervisor');
        project.teamLeaders = project.members.filter(member => member.role == 'teamLeader');
        project.membersList = project.members.map(member => member.member);

        project.isPublic = !project.settings.private;

        project.isProjectManager = Boolean(
            Array.get(project.members, member => member.role == 'projectManager' && member.member.id == this.user.id)
        );

        project.isSupervisor = Boolean(
            Array.get(project.members, member => member.role == 'supervisor' && member.member.id == this.user.id)
        );

        project.isTeamLeader = Boolean(
            Array.get(project.members, member => member.role == 'teamLeader' && member.member.id == this.user.id)
        );

        project.isHigherAuthority = project.isProjectManager || project.isSupervisor;

        project.isModerator = project.isHigherAuthority || project.isTeamLeader;

        // if (this.router.route() != `/projects/${project.id}` && !project.isMember) {
        if (!project.isMember) {
            return this.router.navigateTo('/projects');
        }

        this.project = project;
        this.title = (this.prependName ? `[${this.prependName.capitalize()}]` : '') + project.name;

        this.cache();

        this.onProjectLoad();
    }

    cache() {
        this.shareable.share('project', this.project);

        // this.session.set('project', this.project);
    }

    getMember(memberId) {
        return Array.get(this.project.members, member => member.member.id == memberId);
    }

    onProjectLoad() {
        this.isValidForm = true;
        this.isSending = false;
    }

    openModal(type, record = this.defaultSchema, index) {
        this.modalIsOpened = true;
        this.isSending = false;
        this.currentType = type;

        let singleName = pluralize(this.itemKey.capitalize(), 1);

        this.modalHeading = type == 'add' ? 'Add New ' + singleName : 'Edit ' + singleName;

        this.record = Object.clone(record);

        this.index = index;
    }

    async submit(form) {
        this.isSending = true;
        this.detectChanges();

        let updatedRecord, updatedProject;

        if (this.recordAudio && this.recordAudio.recordData) {
            let formData = new FormData(form);
            formData.append(this.audioInputName, this.recordAudio.recordData);
            form = formData;
        }

        if (this.currentType == 'add') {
            let { record, project } = await this.service.create(form);

            updatedRecord = record;

            updatedProject = project;

            Object.get(this.project, this.itemKey).unshift(record);
        } else {
            let { record, project } = await this.service.update(this.record.id, form);

            updatedRecord = record;

            updatedProject = project;

            Object.set(this.project, this.itemKey + '.' + this.index, record);
        }

        if (updatedProject) {
            this.boot(updatedProject);
        }

        if (this.modal) {
            this.modal.close();
        } else {
            this.modalIsOpened = false;
        }

        this.onSubmit(updatedRecord);

        setTimeout(() => {
            this.isSending = false;
        }, 1000);
    }

    userIsTeamLeaderOf(teamType) {
        for (let team of this.project.teams) {
            if (team.type != teamType) continue;

            for (let member of team.members) {
                if (member.member.id == this.user.id && member.role == 'teamLeader') return true;
            }
        }

        return false;
    }

    onSubmit(record) { }
    onRemove(record) { }

    confirmRemoving(record, index) {
        this.record = record;

        this.index = index;

        this.confirmDelete = true;
    }

    remove() {
        Object.remove(this.project, this.itemKey + '.' + this.index);
        Object.set(this.project, this.itemKey, Array.reset(Object.get(this.project, this.itemKey)));

        this.service.delete(this.record.id);

        this.onRemove(this.record);

        this.index = null;
        this.record = null;
    }
}