const { messages, users, forums } = require('../../fixtures.json');

const resolvers = {
    Query: {
        messages: () => messages,
        users: () => users,
        forums: () => forums
    }
};
