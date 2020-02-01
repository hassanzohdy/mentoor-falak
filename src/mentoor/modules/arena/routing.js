// Arena module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/arena',
        middleware: [],
    }, routerGroup => {
        // Arena page
		routerGroup.add('/', ArenaPage);
		// New Challenge/new Challenge page
		routerGroup.add('/new', NewChallengePage);
		// New Challenge/challenges Pending Requests page
		routerGroup.add('/challenges/pending', ChallengesPendingRequestsPage);
		// Challenge/about Page page
		routerGroup.add('/challenges/{:id}', AboutPage);
		// Challenge/final Review Page page
		routerGroup.add('/challenges/{:id}/final', FinalReviewPage);
		// Challenge/results Page page
		routerGroup.add('/challenges/{:id}/results', ResultsPage);
		// Challenge/participants Page page
		routerGroup.add('/challenges/{:id}/participants', ParticipantsPage);
		// Challenge/preview Answers Page page
		routerGroup.add('/challenges/{:id}/{:participantId}/preview', PreviewAnswersPage);
		// Challenge/challenge Questions Page page
		routerGroup.add('/challenges/{:id}/questions', ChallengeQuestionsPage);
		// Rank page
		routerGroup.add('/arena/rank', RankPage);
		// end of routes
    });
});