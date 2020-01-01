import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  min-width: 770px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding-right: 10px;

    a {
      font-weight: bold;
      color: #999;
      margin-right: 20px;
    }
    a:first-child {
      margin-left: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #eee;
  padding: 10px 0;

  img {
    margin-right: 5px;
    padding-right: 5px;
  }

  span {
    font-weight: bold;
    color: #ee4d64;
    margin-right: 10px;
    padding-right: 10px;
  }
`;

export const Menu = styled.div`
  display: flex;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    margin-left: 10px;

    li {
      font-size: 15px;
      margin-right: 12px;
      a {
        font-weight: bold;
        color: #999999;
        text-decoration: none;
        &:hover {
          color: #444;
        }
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }

    button {
      color: #de3b3b;
      border: 0;
      font-size: 12px;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
