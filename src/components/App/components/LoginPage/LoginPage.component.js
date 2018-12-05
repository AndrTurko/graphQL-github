import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { Wrapper, LogInWrapper, LogIn } from './LoginPage.styled';

const CLIENT_ID = '11fd4835722176ccdc12';
const { REACT_APP_REDIRECT_URI } =  process.env;
const AUTH_API_URI = 'https://gatekeeper-graphql.herokuapp.com/authenticate';


class LoginPage extends React.Component {
  componentDidMount() {
    const code = window.location.href.match(/[?]code=(.*)/)
      && window.location.href.match(/[?]code=(.*)/)[1];

    if (code) {
      const request = new Request(`${AUTH_API_URI}/${code}`, {
        method: 'GET',
        cache: 'no-cache',
        mode: 'cors',
        credentials: 'omit',
      });

      fetch(request)
        .then(response => response.json())
        .then(({ token }) => {
          localStorage.setItem('github_token', token);
          window.location.href = REACT_APP_REDIRECT_URI
        });
    }
  }

  render() {
    return (
      <Wrapper>
        <LogInWrapper href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REACT_APP_REDIRECT_URI}`}>
          <LogIn>Log In</LogIn>
          <GoMarkGithub />
        </LogInWrapper>
      </Wrapper>
    );
  }
}


export default LoginPage;
