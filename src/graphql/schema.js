export default `
  type User {
    id: String!
    firstname: String
    lastname: String
    fullname: String
    createdAt: String
    updatedAt: String
  }

  type Tenant {
    name: String!
    createdAt: String
    updatedAt: String
  }

  type Auth {
    token: String
  }

  type Query {
    getUser: User
    getUsers: [User]
    getTenant: Tenant
    getTenants: [Tenant]
  }

  type Mutation {
    addUser(firstname: String, lastname: String, ssc: String!): User
    updateUser(firstname: String, lastname: String): User
    deleteUser(id: String!): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
