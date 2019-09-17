# Planet Forums

This is the equivalent of the initial README.md file but with part 2 updates.

## Type details

```
type Forum {
    id: String
    name: String
    creation_date: String
    messageIds: [String]
    isPrivate: Boolean
    adminUserId: String
    tempUserIds: [String]
}

type Message {
    id: String,
    text: String,
    creation_date: String
    user: User
}

type User {
    id: String
    username: String
    picture: String
    forumIds: [String]
    creation_date: String
}
```

## Query

```
type Query {
    getAllMessages: [Message]
    getAllForums: [Forum]
    getAllUsers: [User]
    getMessagesByForumId(forumId: String): [Message]
    getUserById(userId: String): User,
    getRequestJoins(forumId: String): [String]
}
```

## Mutations

```
type Mutation {
    createMessage(userId: String, forumId: String, text: String): Message
    createForum(name: String): Forum
    joinForum(forumId: String, userId: String): Forum,
    acceptUserJoin(forumId: String, requestUserId: String): User,
    declineUserJoin(forumId: String, requestUserId: String): User
}
```