import styled from 'styled-components';

export const RepositoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  width: 1090px;
  min-height: 600px;
`;

export const Button = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  background: #fff;
  outline: 0;
  border: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;

  &::after {
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    opacity: 0;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    transform: scale(1.02, 1.02);
  }

  &:hover::after {
      opacity: 1;
  }
`;
