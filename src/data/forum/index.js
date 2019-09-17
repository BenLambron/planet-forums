const { forums } = require('../../../dataset');

const getAllForums = () => forums.filter(forum => !forum.isPrivate);
const getRequestJoins = (forumId) => forums.find(forum => forum.id === forumId).tempUserIds; 

module.exports = {
    getAllForums,
    getRequestJoins
};