class Project {
    constructor(service) {
        this.service = service;
        this.user = DI.resolve('user');
        this.db = DI.resolve('db');
        this.router = DI.resolve('router');
        this.shareable = DI.resolve('shareable');
        this.projectsService = DI.resolve('projectsService');
        this.cache = DI.resolve('session');
        this.title = '';
        this.query = null;
        this.defaultSchema = {};
    }

    queryOptions() {
        return {};
    }

    async init() {
        this.projectId = this.router.params.id;
        this.isLoading = true;
        this.modalIsOpened = false;
        this.isValidForm = true;
        this.activitiesLoaded = false;

        if (!this.query) {
            this.query = this.queryOptions();
        }

        this.project = null;

        if (this.lastProjectActivities != this.projectId) {
            this.activities = null;
        }

        // this.activities = null;

        // if (this.project && this.itemKey) {
        //     delete this.project[this.itemKey];
        // }

        this.load();
    }

    loadData() {
        return this.projectsService.get(this.projectId, this.query);
    }

    recache() {
        this.loadData().then(response => {
            this.db.set(this.cache, response);
        });
    }

    load() {
        // check for privacy

        this.cacheKey = `project-${this.projectId}-${JSON.stringify(this.query)}`;
        try {
            // this.db.get(this.cacheKey, e => {
            //     return this.loadData();
            // }, this.db.recache).then(response => {
            this.loadData().then(response => {
                let { record } = response;
                if (!record) {
                    return this.router.navigateTo('/404');
                }

                this.boot(record);

                if (this.stopExecuting) return;

                if (!this.project) return;

                let isHigherAuthority = userCanJoinAnyProjectIn(currentUserCompany());

                if (isHigherAuthority) {
                    this.project.is.member = true;
                    this.project.is.higherAuthority = true;
                }

                if (!this.project.isPublic && !this.project.isMember && !this.query.discussion && ! isBot()) {
                    return this.router.navigateTo('/projects');
                }

                if (Is.mobile.any()) {
                    this.projectLayout.sidebarIsVisible = false;
                }

                this.isLoading = false;
            });
        } catch (response) {
            echo(response)
            if (response.statusCode == 400) {
                this.router.navigateTo('/404');
            }
        }
    }

    async cacheMany(queryName, items) {
        let itemWrapper = Object.clone(this.project);

        delete itemWrapper[pluralize(queryName)];

        for (let item of items) {
            itemWrapper[queryName] = item;
            let response = {
                record: itemWrapper,
            }

            let query = {
                [queryName]: String(item.id),
            };

            await this.db.set(`project-${this.project.id}-${JSON.stringify(query)}`, response);
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

        // project.isPublic = !project.settings.private;
        project.isPublic = false;

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

        let isHigherAuthority = userCanJoinAnyProjectIn(currentUserCompany());

        if (isHigherAuthority) {
            project.isMember = true;
            project.is.member = true;
            project.is.higherAuthority = true;
        }

        // if (this.router.route() != `/projects/${project.id}` && !project.isMember) {
        if (!project.isMember && !this.query.discussion && ! isBot() && ! isHigherAuthority) {
            return this.router.navigateTo('/projects');
        }

        this.project = project;
        this.title = (this.prependName ? `[${this.prependName.capitalize()}]` : '') + project.name;

        this.cacheProject();

        this.onProjectLoad();
    }

    cacheProject() {
        this.shareable.share('project', this.project);

        this.cache.set('project.' + this.project.id, this.project);
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

        let singleName = pluralize((this.itemKey || '').capitalize(), 1);

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

            (Object.get(this.project, this.itemKey) || []).unshift(record);
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

        this.recache();

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