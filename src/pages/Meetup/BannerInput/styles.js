import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 300px;
  border-radius: 4px;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 100%;
      /* border-radius: 4px; */
      background: rgba(0, 0, 0, 0.8);
    }

    p {
      font-size: 20px;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.3);
      height: 300px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        opacity: 0.7;
      }
    }

    input {
      display: none;
    }
  }
`;
