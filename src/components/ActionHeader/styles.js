import { darken } from 'polished';
import styled from 'styled-components';

export const PostBotton = styled.button`
  display: flex;
  align-items: center;
  width: 142px;
  height: 36px;
  margin: 5px 10px;
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
    margin-right: 5px;
  }
`;
export const BackBotton = styled.button`
  display: flex;
  align-items: center;
  width: 142px;
  height: 36px;
  margin: 5px 10px;
  padding: 5px 10px;
  background: #ccc;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#CCC')};
  }

  svg {
    margin-right: 5px;
  }
`;
