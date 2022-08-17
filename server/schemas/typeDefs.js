// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    folders: [Folder]
  }

  type Folder {
    name: String!
    summaries: [Summary]
    createdAt: String 
  }

  type SummaryApi {
    sentences: String
  }

  type Summary{
  summary: String!
  createdAt: String 
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getSummary(text: String!, sentnum: Int): SummaryApi
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFolder(name: String!):User
    addSummary(summary:String!):Folder
  }
 

`;

module.exports = typeDefs;
