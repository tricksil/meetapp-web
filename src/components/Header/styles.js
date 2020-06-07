import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 80px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  aside {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  strong {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
  a {
    margin-top: 2px;
    color: #999;
    font-size: 14px;
  }
`;

export const Logout = styled.button`
  border: 0;
  height: 42px;
  border-radius: 4px;
  background: #d44059;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  padding: 0 20px;
  margin-left: 30px;
  cursor: pointer;

  &:hover {
    background: ${darken(0.06, '#d44059')};
  }
`;
