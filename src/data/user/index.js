const { users } = require('../../../dataset');

const getAllUsers = () => users;
const getUserById = (root, args, context, info) => {
    return users.find(user => user.id === args.userId);
}

module.exports = {
    getAllUsers,
    getUserById
};