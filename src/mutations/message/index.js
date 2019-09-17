const uuid = require('uuidv4').default;
const { messages, forums, users } = require('../../../dataset');

const createMessage = (root, args, context, info) => {
    const message = {
        id: uuid(),
        user: users.find(user => user.id === args.userId),
        text: args.text,
        creation_date: new Date()
    }
    messages.push(message);
    const forum = forums.find(forum => forum.id === args.forumId);
    forum.messageIds.push(message.id);

    return message;
};

module.exports = {
    createMessage
};