import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import { Wrapper, GlobalStyle } from './App.styled';
import StarredRepositories from './components/StarredRepositories';
import LoginPage from './components/LoginPage';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    const token = localStorage.getItem('github_token');
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }
  },
  clientState: {
    defaults: {},
    resolvers: {},
  },
  connectToDevTools: true,
});

const GET_LOGIN = gql`
  query {
    viewer {
      login
    }
  }
`;

const App = () => {
  const token = localStorage.getItem('github_token');
  return (
    <ApolloProvider client={client}>
      {
        token
          ? (
            <Wrapper>
              <p>Starred repositories:</p>
              <Query query={GET_LOGIN}>
                {({ loading, error, data }) => {
                  if (loading) return <div>Loading...</div>;
                  if (error) return <div>Error :(</div>;

                  return <StarredRepositories userLogin={data.viewer.login} />;
                }}

              </Query>
            </Wrapper>
          )
          : <LoginPage />
      }
      <GlobalStyle />
    </ApolloProvider>
  );
};

export default App;
