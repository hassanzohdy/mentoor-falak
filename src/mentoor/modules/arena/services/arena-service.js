class ArenaService extends Endpoint.Service {
    getChallenges() {
        // return this.endpoint.get('/arena/challenges')
        return new Promise((resolve, reject) => {
            let challenges = this.challenges = [
                {
                    id: "1",
                    title: "Challenge 1",
                    description: "A challenge to enhance your skills",
                    questions: [],
                    approvedBy: { id: 1, name: "mh" },
                    createdBy: { id: 1, name: "mh", image: "https://via.placeholder.com/50" },
                    createdAt: {
                        format: "4-2-2020",
                        timestamp: 1580767200
                    },
                    isApproved: true,
                    reward: 50000,
                    level: "beginner",
                    type: "quiz",
                    tags: { image: "image", name: "falakjs" },
                    participants: [{ id: 1, name: "mh" }, { id: 2, name: "mz" }],
                    isEnded: false,
                    questions: [
                        { question: "What?" },
                        { question: "Why?" },
                        { question: "Where?" }
                    ],
                    startsAt: {
                        format: "4-2-2020",
                        timestamp: 1581187735
                    },
                    endsAt: {
                        format: "6-2-2020",
                        timestamp: 1581197735
                    },
                },
                {
                    id: "2",
                    title: "Challenge 2",
                    description: "A challenge to enhance your abilities",
                    questions: [],
                    approvedBy: { id: 1, name: "mh" },
                    createdBy: { id: 1, name: "mh", image: "https://via.placeholder.com/50" },
                    createdAt: {
                        format: "4-2-2020",
                        timestamp: 1580767200
                    },
                    isApproved: true,
                    reward: 50000,
                    level: "beginner",
                    type: "quiz",
                    tags: { image: "image", name: "falakjs" },
                    participants: [{ id: 1, name: "mh" }, { id: 2, name: "mz" }],
                    isEnded: true,
                    questions: [
                        { question: "What?" },
                        { question: "Why?" },
                        { question: "Where?" }
                    ],
                    startsAt: {
                        format: "4-2-2020",
                        timestamp: 1581187635
                    },
                    endsAt: {
                        format: "6-2-2020",
                        timestamp: 1581187735
                    },
                },
            ];

            try {
                setTimeout(() => {
                    resolve({ records: challenges });
                }, 500);
            } catch {
                reject("An error happened, please refresh");
            }
        })
    }

    getSingleChallenge(id) {
        // return this.endpoint.get(`/challenges/${id}`)
        return new Promise((resolve, reject) => {
            let challenge = this.challenges = {
                id: "1",
                title: "Challenge 1",
                description: "A challenge to enhance your skills",
                creatorId: "user1",
                state: "approved",
                questions: [
                    {
                        id: "q1",
                        text: "What's your name",
                        preview: "console.log('hi')",
                        answers: [
                            {
                                id: "ans1",
                                text: "Mohamed",
                                userId: "usr1",
                                challengeId: "1",
                                questionId: "q1",
                                correct: true
                            },
                            {
                                id: "ans2",
                                text: "Mohamed",
                                userId: "usr2",
                                challengeId: "1",
                                questionId: "q1",
                                correct: true
                            }
                        ]
                    }
                ],
                participants: ["usr1", "usr2"],
                requirements: ["req 1", "req 2"],
                thumbnail: "https://via.placeholder.com/150",
                startsAt: {
                    format: "4-2-2020",
                    timestamp: 1580767200
                },
                endsAt: {
                    format: "6-2-2020",
                    timestamp: 1580940000
                },
            }

            try {
                setTimeout(() => {
                    resolve({ body: challenge });
                }, 2000);
            } catch {
                reject("An error happened, please refresh");
            }
        })
    }
}

DI.register({
    class: ArenaService,
    alias: 'arenaService',
});