import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 300px;
  width: 350px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: #fff;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.span`
  font-size: calc(15px + 1vmin);
  color: #253f57;
  text-decoration: none;
`;

export const Description = styled.span`
  margin-top: 20px;
  line-height: 1.4em;
  color: lightgrey;
`;

export const Owner = styled.span`
    display: flex;
    align-items: center;
    margin-top: 10px;
    color: black;
    `;

export const OwnerAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-right: 12px;
  `;

export const CountWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const Count = styled.span`
  margin-right: 10px;
`;
