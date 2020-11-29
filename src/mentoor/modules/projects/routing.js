// Projects module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/projects',
        middleware: MIDDLEWARE_LIST.guest
    }, routerGroup => {
        // Projects page
        routerGroup.add('/', ProjectsPage);
        // Project details page
        routerGroup.add('/{:id}', ProjectDetailsPage);
        // Projects help page
        routerGroup.add('/help', ProjectsHelpPage);

        // New project page
        routerGroup.add('/new', NewProjectPage);

        // My Projects page
        routerGroup.add('/me', MyProjectsPage, {
            middleware: MIDDLEWARE_LIST.loggedIn,
        });

        routerGroup.group({
            prefix: '/{:id}',
            // middleware: MIDDLEWARE_LIST.loggedIn,
        }, routerGroup => {
            // Project teams page page
            routerGroup.add('/teams', ProjectTeamsPage);
            // Project team details page page
            routerGroup.add('/teams/{team}/members', ProjectTeamDetailsPage);
            // Project members page page
            routerGroup.add('/members', ProjectMembersPage);
            // Project settings page page
            routerGroup.add('/settings', ProjectSettingsPage);
            // Project srs page page
            routerGroup.add('/srs', ProjectSrsPage);
            // Project shopping mall page page
            routerGroup.add('/shopping-mall', ProjectShoppingMallPage);
            // Project recruitment page
            routerGroup.add('/recruitment', ProjectRecruitmentPage);
            // Project modules page
            routerGroup.add('/modules', ProjectModulesPage);
            // Project fund page
            routerGroup.add('/fund', ProjectFundPage);
            // Project client page
            routerGroup.add('/client', ProjectClientPage);
            // Project meetings page
            routerGroup.add('/meetings', ProjectMeetingsPage);

            // Project supervisors page
            routerGroup.add('/supervisors', ProjectSupervisorsPage);
            // Project meetings page
            routerGroup.add('/meetings', ProjectMeetingsPage);
            // Project meeting details page
            routerGroup.add('/meetings/{:meetingId}', ProjectMeetingDetailsPage);

            // project Sprints Page page
            routerGroup.add('/sprints', ProjectSprintsPage);
            // project Sprint Details Page page
            routerGroup.add('/sprints/{:sprintId}', ProjectSprintDetailsPage);
            // project User Stories Page page
            routerGroup.add('/user-stories', ProjectUserStoriesPage);
            // Project User Story Details page
            routerGroup.add('/user-stories/{:userStoryId}', ProjectUserStoryDetailsPage);
            // Project User Story Form page
            routerGroup.add('/user-stories/new', ProjectUserStoryFormPage);
            routerGroup.add('/user-stories/{:userStoryId}/edit', ProjectUserStoryFormPage);
            // project Tasks Board Page page
            routerGroup.add('/tasks-board', ProjectTasksBoardPage);
            // project Documentations Page page
            routerGroup.add('/documentations', ProjectDocumentationsPage);
            // Project Documentation Details page
            routerGroup.add('/documentations/{:documentationId}', ProjectDocumentationDetailsPage);
            // project Discussions Page page
            routerGroup.add('/discussions', ProjectDiscussionsPage);
            // Project Discussion Details page
            routerGroup.add('/discussions/{:discussionId}', ProjectDiscussionDetailsPage);
            // Project Details/project Bugs Page page
            routerGroup.add('/bugs', ProjectBugsPage);
            // Project Details/project Reminders Page page
            routerGroup.add('/reminders', ProjectRemindersPage);
            // Project Details/project Modules Page page
            routerGroup.add('/modules', ProjectModulesPage);
            // Project Module Details page
            routerGroup.add('/modules/{:moduleId}', ProjectModuleDetailsPage);

            // Project Details/project Change Requests Page page
            routerGroup.add('/change-requests', ProjectChangeRequestsPage);
            // Change Request Details page
            routerGroup.add('/change-requests/{:changeRequestId}', ChangeRequestDetailsPage);

            // Project Bug Details page
            routerGroup.add('/bugs/{:bugId}', ProjectBugDetailsPage);
            // Project Details/project Polls Page page
            routerGroup.add('/polls', ProjectPollsPage);
            // Project Poll Details page
            routerGroup.add('/polls/{:pollId}', ProjectPollDetailsPage);
            // Project Details/project Test Suits Page page
            routerGroup.add('/test-suits', ProjectTestSuitsPage);
            // Test Case page
            routerGroup.add('/test-cases/{:testCaseId}', TestCasePage);
            // Project Details/resources/project Resources Page page
            routerGroup.add('/resources', ProjectResourcesPage);
            // Project Details/project Features Page page
            routerGroup.add('/features', ProjectFeaturesPage);
            // Project Components page
            routerGroup.add('/components', ProjectComponentsPage);
            // Project Test Environments page
            routerGroup.add('/test-environments', ProjectTestEnvironmentsPage);
            // end of routes
        });
    });
});
