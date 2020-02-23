// Arena module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/arena',
        middleware: MIDDLEWARE_LIST.loggedIn
    }, arenaGroup => {
        // Arena page
		arenaGroup.add('/', ArenaPage);
		// New Challenge/new Challenge page
		arenaGroup.add('/new', NewChallengePage);
		// New Challenge/challenges Pending Requests page
		arenaGroup.group({
			prefix: "/challenges"
		}, challengesGroup => {
			challengesGroup.add('/pending', ChallengesPendingRequestsPage);
			// Challenge/about Page page
			challengesGroup.add('/{id}', AboutPage);
			// Challenge/final Review Page page
			challengesGroup.add('/{id}/final', FinalReviewPage);
			// Challenge/results Page page
			challengesGroup.add('/{id}/results', ResultsPage);
			// Challenge/participants Page page
			challengesGroup.add('/{id}/participants', ParticipantsPage);
			// Challenge/preview Answers Page page
			challengesGroup.add('/{id}/{participantId}/preview', PreviewAnswersPage);
			// Challenge/challenge Questions Page page
			challengesGroup.add('/{id}/questions', ChallengeQuestionsPage);
		})
		// Rank page
		arenaGroup.add('/rank', RankPage);
		// end of routes
    });
});