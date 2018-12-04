import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Trail, animated, config } from 'react-spring';
import StarredRepository from './components/StarredRepository.component';
import { RepositoriesWrapper, Button } from './StarredRepositories.styled';


const GET_STARRED_REPOSITORIES = gql`
  query getStarredRepositories($userLogin: String!, $cursor: String) {
    user(login: $userLogin) {
      name
      starredRepositories(first: 6, after: $cursor) {
        edges {
          cursor
          node {
            id
            name
            url
            description
            forkCount
            owner {
              login
              avatarUrl
            }
            stargazers {
              totalCount
            }
            watchers {
              totalCount
            }
            languages(first: 3) {
              edges {
                node {
                  name
                }
                size
              }
            }
          }
        }
      }
    }
  }
`;

const fetchReps = (fetchMore, data) => {
  const repositories = data.user.starredRepositories.edges;
  fetchMore({
    variables: { cursor: repositories[repositories.length - 1].cursor },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      const newEdges = fetchMoreResult.user.starredRepositories.edges;
      return newEdges.length
        ? {
          user: {
            ...previousResult.user,
            starredRepositories: {
              __typename: previousResult.user.starredRepositories.__typename, //eslint-disable-line
              edges: [...previousResult.user.starredRepositories.edges, ...newEdges],
            },
          },
        }
        : previousResult;
    },
  });
};

const StarredRepositories = ({ userLogin }) => (
  <Query query={GET_STARRED_REPOSITORIES} variables={{ userLogin }}>
    {({ data, loading, error, fetchMore }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;
      return (
        <>
          <RepositoriesWrapper>
            <Trail
              native
              items={data.user.starredRepositories.edges}
              keys={d => d.node.id}
              from={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
              to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
              config={config.gentle}
            >
              {item => props => (
                <animated.div style={props} className="item">
                  <StarredRepository {...item.node} />
                </animated.div>
              )}
            </Trail>
          </RepositoriesWrapper>
          <Button type="button" onClick={() => fetchReps(fetchMore, data)}>Load more</Button>
        </>
      );
    }}
  </Query>
);

export default StarredRepositories;
