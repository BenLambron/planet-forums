# Planet Forums

This is a technical test for interview.
It is also my first attempt in a GraphQL environment. 

## Getting Started

First of all, install all the dependencies needed in the project with
```
npm install
```
Then you run the server using
```
npm run start
``` 

## Type details

```
type Forum {
    id: String
    name: String
    creation_date: String
    messageIds: [String]
    isAvailable: Boolean
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
    getUserById(userId: String): User
}
```

## Mutations

```
type Mutation {
    createMessage(userId: String, forumId: String, text: String): Message
    createForum(name: String): Forum
    joinForum(forumId: String, userId: String): Forum
}
```