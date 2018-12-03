import React from 'react';
import { GoEye, GoStar, GoRepoForked } from 'react-icons/go';
import { Wrapper, Title, Description, Owner, OwnerAvatar, CountWrapper, Footer, Count } from './StarredRepository.styled';

const formateNumber = number => new Intl.NumberFormat('ru-RU').format(number);

const StarredRepository = ({
  name,
  description,
  stargazers,
  watchers,
  forkCount,
  owner: {
    login,
    avatarUrl
  },
}) => (
  <Wrapper>
    <Title>{name}</Title>
    <Owner>
      <OwnerAvatar src={avatarUrl} />
      {login}
    </Owner>
    <Description>{description || 'No description'}</Description>
    <Footer>
      <CountWrapper>
        <Count>{formateNumber(watchers.totalCount)}</Count>
        <GoEye />
      </CountWrapper>
      <CountWrapper>
        <Count>{formateNumber(forkCount)}</Count>
        <GoRepoForked />
      </CountWrapper>
      <CountWrapper>
        <Count>{formateNumber(stargazers.totalCount)}</Count>
        <GoStar />
      </CountWrapper>
    </Footer>
  </Wrapper>
);

export default StarredRepository;
