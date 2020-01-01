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
            <Link to="/students">ALUNOS</Link>
            <Link to="/plans">PLANOS</Link>
            <Link to="/registrations">MATRÍCULAS</Link>
            <Link to="/helpOrders">PEDIDOS DE AUXÍLIO</Link>
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
