export default `
  type Auth {
    token: String!
  }
  type Status {
    message: String!
  }

  type User {
    id: ID!
    firstname: String
    lastname: String
    fullname: String
    email: String
    phone: String
    createdAt: String
    updatedAt: String
  }

  type Tenant {
    id: ID!
    name: String!
    createdAt: String
    updatedAt: String
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    addUser(firstname: String, lastname: String, ssc: String!): User
    updateUser(firstname: String, lastname: String): User
    deleteUser(id: String!): User

    login(email: String!, password: String!): Auth
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
