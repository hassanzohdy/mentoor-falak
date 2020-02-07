class ArenaService extends Endpoint.Service {
    getChallenges() {
        // return this.endpoint.get('/challenges')
        return new Promise((resolve, reject) => {
            let challenges = this.challenges = [
                {
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
                },
                {
                    id: "2",
                    title: "Challenge 2",
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
                                    correct: false
                                }
                            ]
                        },
                        {
                            id: "q2",
                            text: "What's your name",
                            preview: "console.log('hi')",
                            answers: [
                                {
                                    id: "ans1",
                                    text: "Mohamed",
                                    userId: "usr1",
                                    challengeId: "2",
                                    questionId: "q2",
                                    correct: true
                                },
                                {
                                    id: "ans2",
                                    text: "Mohamed",
                                    userId: "usr2",
                                    challengeId: "2",
                                    questionId: "q2",
                                    correct: true
                                }
                            ]
                        }
                    ],
                    participants: ["usr1", "usr2"],
                    requirements: ["req 1", "req 2"],
                    thumbnails: "https://via.placeholder.com/150",
                    startsAt: {
                        format: "4-2-2020",
                        timestamp: 1580767200
                    },
                    endsAt: {
                        format: "6-2-2020",
                        timestamp: 1580940000
                    },
                },
                {
                    id: "3",
                    title: "Challenge 3",
                    description: "A challenge to enhance your skills",
                    creatorId: "user2",
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
                                    challengeId: "3",
                                    questionId: "q1",
                                    correct: true
                                },
                                {
                                    id: "ans2",
                                    text: "Mohamed",
                                    userId: "usr1",
                                    challengeId: "3",
                                    questionId: "q1",
                                    correct: true
                                }
                            ]
                        },
                        {
                            id: "q2",
                            text: "What's your name",
                            preview: "console.log('hi')",
                            answers: [
                                {
                                    id: "ans1",
                                    text: "Mohamed",
                                    userId: "usr1",
                                    challengeId: "3",
                                    questionId: "q2",
                                    correct: true
                                },
                                {
                                    id: "ans2",
                                    text: "Mohamed",
                                    userId: "usr1",
                                    challengeId: "3",
                                    questionId: "q2",
                                    correct: true
                                }
                            ]
                        }
                    ],
                    participants: ["usr1", "usr2"],
                    requirements: ["req 1", "req 2"],
                    thumbnails: "https://via.placeholder.com/150",
                    startsAt: {
                        format: "4-2-2020",
                        timestamp: 1580767200
                    },
                    endsAt: {
                        format: "6-2-2020",
                        timestamp: 1580940000
                    },
                }
            ];

            try {
                setTimeout(() => {
                    resolve({ body: challenges });
                }, 2000);
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