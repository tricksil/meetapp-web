import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  height: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    h2 {
      color: #fff;
      font-size: 32px;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const GroupButton = styled.div`
  button {
    text-align: right;
    margin: 5px 0 0;
    padding: 0 15px 0 50px;
    border: 0;
    background: #4dbaf9;
    height: 42px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    transition: background 0.2s;
    cursor: pointer;

    &:hover {
      background: ${darken(0.06, '#4DBAF9')};
    }
  }

  button:last-child {
    background: #f94d6a;
    margin-left: 15px;

    &:hover {
      background: ${darken(0.06, '#f94d6a')};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  p {
    min-height: 100px;
    margin-top: 25px;
    font-size: 18px;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.6);
  }

  div {
    display: flex;

    span {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
      text-align: right;
      margin-left: 30px;
    }
  }
`;

export const Banner = styled.img`
  height: 300px;
  border-radius: 4px;
`;
