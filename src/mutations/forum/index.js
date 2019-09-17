const uuid = require('uuidv4').default;
const { forums, users } = require('../../../dataset');

const createForum = (root, args, context, info) => {
    const forum = {
        id: uuid(),
        name: args.name,
        creation_date: new Date()
    }
    forums.push(forum);
    const defaultUser = users.find(user => user.defaultUser);
    defaultUser.forumIds.push(forum.id);

    return forum;
};

const joinForum = (root, args, context, info) => {
    const forum = forums.find(forum => forum.id === args.forumId);
    if (!forum) {
        throw new Error('Forum not found');
    }

    if (forum.isPrivate) {
        forum.tempUserIds.push(args.userId);
    } 
    else {
        const user = users.find(user => user.id === args.userId);
        if (!user) {
            throw new Error('User not found');
        }
        user.forumIds.push(forum.id);
    }

    return forum;
};

module.exports = {
    createForum,
    joinForum
};