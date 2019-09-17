const { messages, forums } = require('../../../dataset');

const getAllMessages = () => messages;
const getMessagesByForumId = (root, args, context, info) => {
    const forumId = args.forumId;
    const messageIds = forums.find(forum => forum.id === forumId).messageIds;
    const retrievedMessages = [];
    messages.forEach(message => {
        if (messageIds.find(messageId => message.id === messageId)) {
            retrievedMessages.push(message);
        }
    });
    return retrievedMessages.sort((a, b) => b.creation_date - a.creation_date);
}

module.exports = {
    getAllMessages,
    getMessagesByForumId
};