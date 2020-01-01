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
