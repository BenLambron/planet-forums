const { initMessages, initForums, initUsers } = require('./fixtures.json');

// Copy the initial values of our fixtures
const messages = [...initMessages];
const forums = [...initForums];
const users = [...initUsers];

module.exports = {
    messages,
    forums,
    users
};