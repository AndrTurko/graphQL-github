import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Wrapper, GlobalStyle } from './App.styled';
import StarredRepositories from './components/StarredRepositories';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
  clientState: {
    defaults: {},
    resolvers: {},
  },
  connectToDevTools: true,
});

const App = () => (
  <ApolloProvider client={client}>
    <Wrapper>
      <p>Starred repositories:</p>
      <StarredRepositories />
    </Wrapper>
    <GlobalStyle />
  </ApolloProvider>
);

export default App;
