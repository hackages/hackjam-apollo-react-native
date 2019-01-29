const { ApolloServer, gql } = require('apollo-server');
const movies = require('./mocks/movies.json');
const categories = require('./mocks/categories');

const { originalUrl } = require('./helpers/urls');

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Movie {
    title: String
    vote_count: String
    id: Int
    video: String
    vote_average: String
    popularity: String
    poster_path: String
    original_language: String
    original_title: String
    genre_ids: [Int]
    backdrop_path: String
    adult: String
    overview: String
    release_date: String
  }
  type Category {
    name: String
  }
  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    getMovies: [Movie]
    getCategories: [Category]
  }
`;

const resolvers = {
  Query: {
    getCategories() {
      return categories;
    },
    getMovies() {
      return movies.map(movie => ({
        ...movie,
        poster_path: originalUrl + movie.poster_path
      }));
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: false,
  playground: {
    settings: {
      'editor.theme': 'light'
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
