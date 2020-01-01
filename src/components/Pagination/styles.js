import { darken } from 'polished';
import styled from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  min-width: 800px;

  strong {
    font-size: 24px;
    font-weight: bold;
    color: #444;
  }

  aside {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonPage = styled.button`
  display: flex;
  justify-items: center;
  align-items: center;
  height: 36px;
  margin: 5px 5px;
  padding: 5px 10px;
  background: #ee4d64;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#EE4D64')};
  }

  svg {
    margin: 0 5px;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
