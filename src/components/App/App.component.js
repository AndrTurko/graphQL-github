import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { Wrapper, GlobalStyle } from './App.styled';
import StarredRepositories from './components/StarredRepositories';


const CLIENT_ID = "11fd4835722176ccdc12";
const REDIRECT_URI = "http://localhost:3000";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    const token = localStorage.getItem("github_token");
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`
        }
      });
    }
  },
  clientState: {
    defaults: {},
    resolvers: {},
  },
  connectToDevTools: true,
});

const AUTH_API_URI = "https://gatekeeper-graphql.herokuapp.com/authenticate";
class App extends React.Component {
  state = {
    token: ''
  }
  fetchToken () {
    const code =
      window.location.href.match(/[?]code=(.*)/) &&
      window.location.href.match(/[?]code=(.*)/)[1];
    if (code) {
      var request = new Request(`${AUTH_API_URI}/${code}`, {
        method: 'GET',
        cache: 'no-cache',
        mode:'cors',
        credentials : 'omit'
        });
        
      fetch(request)
        .then(response => response.json())
        .then(({ token }) => {
          console.log(token);
          localStorage.setItem("github_token", token);
          this.setState({
            token,
            
          });
        });
    }
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
        >
          Login
      </a>
      <button onClick={()=>this.fetchToken()}>fetch</button>
        <Wrapper>
          <p>Starred repositories:</p>
          {this.state.token && <StarredRepositories />}
        </Wrapper>
        <GlobalStyle />
      </ApolloProvider>
    );
  }

}

export default App;
