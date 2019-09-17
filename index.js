const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');

const messageTypeDef = fs.readFileSync('./src/typeDefs/message.graphql');
const forumTypeDef = fs.readFileSync('./src/typeDefs/forum.graphql');
const userTypeDef = fs.readFileSync('./src/typeDefs/user.graphql');
const QUERY = fs.readFileSync('./src/typeDefs/query.graphql');

const { 
    createMessage,
    createForum,
    joinForum,
    acceptUserJoin,
    declineUserJoin
 } = require('./src/mutations');

const {
    getAllMessages,
    getMessagesByForumId,
    getAllForums,
    getAllUsers,
    getUserById,
    getRequestJoins
} = require('./src/data');

const typeDefs = gql`
    ${messageTypeDef}
    ${forumTypeDef}
    ${userTypeDef}
    ${QUERY}
    
    type Mutation {
        createMessage(userId: String, forumId: String, text: String): Message
        createForum(name: String): Forum
        joinForum(forumId: String, userId: String): Forum,
        acceptUserJoin(forumId: String, requestUserId: String): User,
        declineUserJoin(forumId: String, requestUserId: String): User
    }
`;

const resolvers = {
    Mutation: {
        createMessage,
        createForum,
        joinForum,
        acceptUserJoin,
        declineUserJoin
    },
    Query: {
        getAllMessages,
        getMessagesByForumId,
        getAllForums,
        getAllUsers,
        getUserById,
        getRequestJoins
    }
};

const app = require('express')();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
app.listen({ port: 3000 }, () => {
    console.log('Web server started at `http://localhost:3000`');
});