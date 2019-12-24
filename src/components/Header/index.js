import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo_header.svg';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile, ContentLogo, Menu } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <ContentLogo>
            <img src={logo} alt="Gympoint" />
            <span>GYNPOINT</span>
          </ContentLogo>
          <Menu>
            <ul>
              <li>
                <Link to="/dashboard">ALUNOS</Link>
              </li>
              <li>
                <Link to="/dashboard">PLANOS</Link>
              </li>
              <li>
                <Link to="/dashboard">MATRÍCULAS</Link>
              </li>
              <li>
                <Link to="/dashboard">PEDIDOS DE AUXÍLIO</Link>
              </li>
            </ul>
          </Menu>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={() => handleLogout()}>
                Sair do sistema
              </button>
            </div>
            <img
              src={
                (profile.avatar && profile.avatar.url) ||
                'https://api.adorable.io/avatars/129/abott@adorable.png'
              }
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
