import styled from 'styled-components';

export const ActionsButtons = styled.div`
  button {
    background: none;
    border: 0;
    padding: 6px;
    font-size: 15px;
  }

  #edit {
    color: #4d85ee;

    &:hover {
      color: #fff;
      background: #4d85ee;
      border-radius: 4px;
    }
  }

  #delete {
    color: #de3b3b;

    &:hover {
      color: #fff;
      background: #ee4d64;
      border-radius: 4px;
    }
  }

  #reply {
    color: #4d85ee;

    &:hover {
      color: #fff;
      background: #4d85ee;
      border-radius: 4px;
    }
  }
`;
