import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
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

    input {
      border: 0;
      padding: 5px 0px;
      font-size: 14px;
    }
  }
`;

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
    cursor: default;
  }
`;

export const ContainerTable = styled.table`
  width: 100%;
  min-width: 800px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  thead th {
    margin: 10px;
    padding: 10px;
    color: #444;
    text-align: left;
    font-weight: bold;
  }

  tbody td {
    margin: 30px;
    &:last-child {
      text-align: right;
    }
  }

  tbody tr {
    & + tr td {
      border-top: 1px solid #eee;
    }
  }

  tbody tr td {
    margin: 10px;
    padding: 10px;
    line-height: 20px;
    font-size: 16px;
    color: #666;
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
    font-size: 15px;
  }

  #reply {
    color: #4d85ee;
  }

  .student {
    width: 50%;
  }

  .createdAt {
    width: 30%;
  }

  .all_center {
    text-align: center;
  }
`;
