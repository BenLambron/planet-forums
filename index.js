const { ApolloServer, gql } = require('apollo-server-express');
// const resolvers = require('./src/resolvers');

const { messages, forums, users } = require('./fixtures.json');

const typeDefs = gql`
    type Message {
        id: String
        userId: String
        text: String
        forumId: String
        creation_date: String
    }

    type Forum {
        id: String
        creation_date: String
        messageIds: [String]
        isAvailable: String
    }

    type User {
        id: String
        username: String
        picture: String
        forumIds: [String]
        creation_date: String
    }

    type Query {
        messages: [Message]
    }
`;

const resolvers = {
    Query: {
        messages: () => messages
    }
};

const app = require('express')();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
app.listen({ port: 3000 }, () => {
    console.log('Web server started at `http://localhost:3000`');
});