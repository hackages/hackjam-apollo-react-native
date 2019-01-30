const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql``;

const resolvers = {};

const server = new ApolloServer({
  playground: {
    settings: {
      'editor.theme': 'light'
    }
  }
});
