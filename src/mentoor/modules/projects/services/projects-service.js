class ProjectsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/projects');
    }

    addTeam(projectId, data) {
        return this.endpoint.post(this.path(`/${projectId}/teams`), data);
    }

    editTeam(projectId, data) {
        return this.endpoint.put(this.path(`/${projectId}/teams`), data);
    }

    deleteTeam(projectId, teamType) {
        return this.endpoint.delete(this.path(`/${projectId}/teams/${teamType}`));
    }
    
    updatePartial(projectId, data) {
        return this.endpoint.put(this.path(`/${projectId}/update`), data);
    }
    
    addNewMember(projectId, data) {
        return this.endpoint.post(this.path(`/${projectId}/members`), data);
    }
    
    assignTeamLeader(projectId, team, data) {
        return this.endpoint.put(this.path(`/${projectId}/teams/${team}/assign-team-leader`), data);
    }
    
    addNewTeamMember(projectId, team, data) {
        return this.endpoint.post(this.path(`/${projectId}/teams/${team}/add-member`), data);
    }

    openNewRecruitment(projectId, data) {
        return this.endpoint.post(this.path(`/${projectId}/recruitment`), data);
    }

    updateRecruitment(projectId, recruitmentId, data) {
        return this.endpoint.put(this.path(`/${projectId}/recruitment/${recruitmentId}`), data);
    }

    deleteRecruitment(projectId, recruitmentId) {
        return this.endpoint.delete(this.path(`/${projectId}/recruitment/${recruitmentId}`));
    }

    donate(projectId, data) {
        return this.endpoint.post(this.path(`/${projectId}/donate`), data);
    }

    addSupervisor(projectId, data) {
        return this.endpoint.post(this.path(`/${projectId}/supervisors`), data);
    }

    dismissMember(projectId, memberId) {
        return this.endpoint.patch(this.path(`/${projectId}/dismiss/${memberId}`));
    } 
}

DI.register({
    class: ProjectsService,
    alias: 'projectsService',
});