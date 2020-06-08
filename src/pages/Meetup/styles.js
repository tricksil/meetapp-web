import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      border: 0;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      font-size: 18px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      border: 0;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 200px;
      padding: 15px;
      font-size: 18px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin-bottom: 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.3);
      margin: 10px 0 20px;
    }

    > button {
      align-self: flex-end;
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

      &:hover {
        background: ${darken(0.06, '#f94d6a')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
