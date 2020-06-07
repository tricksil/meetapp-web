import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    h2 {
      color: #fff;
      font-size: 32px;
    }

    button {
      text-align: right;
      margin: 5px 0 0;
      padding: 0 15px 0 50px;
      border: 0;
      background: #f94d6a;
      height: 42px;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      color: #fff;
      transition: background 0.2s;
      cursor: pointer;

      &:hover {
        background: ${darken(0.06, '#f94d6a')};
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const Meet = styled.li`
  background: rgba(0, 0, 0, 0.3);
  list-style: none;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  p {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  time {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
    text-align: right;
  }
`;
