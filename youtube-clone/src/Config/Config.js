export const List = ["All", "News", "Live", "Devops", "APIs", "Lo-fi", "Free Music", "Mixes", "History", "Dsa", "Tamil cinema", "Javascript", "React", "Bolllywood", "Node Js", "Cloud", "AI", "ML", "Podcast", "Hours", "Free music"];

export const comments = [
    {
        username: "user1",
        comment: "This is a great video!",
        replies: [
            {
                username: "user2",
                comment: "I agree with you!",
                replies: [
                    {
                        username: "user3",
                        comment: "Me too!",
                        replies: []
                    }
                ]
            },
            {
                username: "user4",
                comment: "Thanks for sharing!",
                replies: []
            }
        ]
    },
    {
        username: "user5",
        comment: "I learned a lot from this.",
        replies: []
    },
    {
        username: "user6",
        comment: "Can someone explain this part?",
        replies: [
            {
                username: "user7",
                comment: "Sure, what do you need help with?",
                replies: []
            }
        ]
    },
    {
        username: "user8",
        comment: "Amazing content!",
        replies: [
            {
                username: "user9",
                comment: "Absolutely!",
                replies: []
            }
        ]
    },
    {
        username: "user10",
        comment: "I have a question about the topic.",
        replies: [
            {
                username: "user11",
                comment: "What is your question?",
                replies: [
                    {
                        username: "user10",
                        comment: "Can you explain the second part?",
                        replies: [
                            {
                                username: "user11",
                                comment: "Sure, the second part is about...",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        username: "user12",
        comment: "Great explanation!",
        replies: []
    },
    {
        username: "user13",
        comment: "I didn't understand the last part.",
        replies: [
            {
                username: "user14",
                comment: "Which part didn't you understand?",
                replies: []
            }
        ]
    }
];

export const liveChatMessages = Array.from({ length: 50 }, (_, i) => ({
    username: `user${i + 1}`,
    userId: `id${i + 1}`,
    message: `This is message number ${i + 1}`
}));