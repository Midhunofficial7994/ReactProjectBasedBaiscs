// src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Set up Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://dtale.webc.in/graphql',  // Your GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
