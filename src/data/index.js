const { getAllMessages, getMessagesByForumId } = require('./message');
const { getAllUsers, getUserById } = require('./user');
const { getAllForums, getRequestJoins } = require('./forum');

module.exports = {
    getAllMessages,
    getMessagesByForumId,
    getAllUsers,
    getUserById,
    getAllForums,
    getRequestJoins
}