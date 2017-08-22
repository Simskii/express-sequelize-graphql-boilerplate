export default `
  type User {
    id: ID!
    firstname: String
    lastname: String
    fullname: String
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
    user(id: ID!): User
    users: [User]
    tenant(id: ID!): Tenant
    tenants: [Tenant]
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
