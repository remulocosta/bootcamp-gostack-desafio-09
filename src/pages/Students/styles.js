import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  form {
    content {
      display: flex;
      flex-direction: column;
      background: #fff;
      padding: 30px;

      input {
        border: 1px solid #eee;
        border-radius: 4px;
        height: 44px;
        padding: 15px 15px;

        margin: 0 0 10px;
        &::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      }
      label {
        color: #444;
        font-weight: bold;
      }
      input {
        margin-top: 5px;
      }
      > span {
        color: #fb6f91;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
      }
      div {
        > span {
          color: #fb6f91;
          align-self: flex-start;
          margin: 0 0 10px;
          font-weight: bold;
        }
        display: flex;
        div {
          flex: 1;

          display: flex;
          flex-direction: column;
        }

        :nth-child(2) {
          margin-left: 15px;
          margin-right: 15px;
        }
      }
    }
  }
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

export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  height: 36px;
  margin: 5px 0;
  font-weight: bold;
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #fff;

  svg {
    margin: 10px;
  }
`;

export const ButtonAdd = styled.button`
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

  .name {
    width: 40%;
  }
  .email {
    width: 30%;
  }
  .age {
    width: 10%;
  }

  .all_center {
    text-align: center;
  }
`;
