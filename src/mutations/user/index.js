const { users, forums } = require('../../../dataset');

const intialCheckups = (forumId, requestUserId) => {
    const forum = forums.find(forum => forum.id === forumId);
    if (!forum) {
        throw new Error('Forum not found');
    }

    const adminUser = users.find(user => user.id === forum.adminUserId);
    if (!adminUser) {
        throw new Error('Admin User not found');
    }

    const requestUser = users.find(user => user.id === requestUserId);
    if (!requestUser) {
        throw new Error('Request User not found')
    }
}

const acceptUserJoin = (root, args, context, info) => {
    intialCheckups(args.forumId, args.requestUserId);
    
    const requestUser = users.find(user => user.id === requestUserId);
    if (forum.tempUserIds.find(tempUserId => tempUserId === args.requestUserId)) {
        adminUser.forumIds.push(forum.id);
        if (forum.tempUserIds.index(args.requestId) > -1) {
            forum.tempUserIds.splice(forum.tempUserIds.index(args.requestUserId), 1); // We remove the request userId from the request ids array
        }
    }

    return requestUser;
};

const declineUserJoin = (root, args, context, info) => {
    intialCheckups(args.forumId, args.requestUserId);
    
    const requestUser = users.find(user => user.id === requestUserId);
    if (forum.tempUserIds.find(tempUserId => tempUserId === args.requestUserId)) {
        if (forum.tempUserIds.index(args.requestId) > -1) {
            forum.tempUserIds.splice(forum.tempUserIds.index(args.requestUserId), 1); // We remove the request userId from the request ids array
        }
    }

    return requestUser;
};

module.exports = {
    acceptUserJoin,
    declineUserJoin
};