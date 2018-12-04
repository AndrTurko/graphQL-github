import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #fff;
`;

export const LogInWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000;
  width: 200px;
  height: 70px;
  outline: 0;
  border: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
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

export const LogIn = styled.span`
  margin-right: 10px;
`;
