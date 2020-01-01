import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #ee4d64, #f28a99);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentSignIn = styled.div`
  padding: 40px 20px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    strong {
      font-size: 14px;
      font-weight: bold;
      color: #444;
      text-align: left;
      padding-bottom: 10px;
    }

    input {
      background: none;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(221, 221, 221, 0.8);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#EE4D64')};
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
