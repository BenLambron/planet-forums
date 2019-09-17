const { createForum, joinForum } = require('./forum');
const { createMessage } = require('./message');
const { acceptUserJoin, declineUserJoin } = require('./user');

module.exports = {
    createForum,
    joinForum,
    createMessage,
    acceptUserJoin,
    declineUserJoin
};