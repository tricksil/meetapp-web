import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile, Logout } from './styles';

import logo from '~/assets/logo.svg';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <strong>Paulo Rodriguez</strong>
            <Link to="/profile">Meu Perfil</Link>
          </Profile>
          <Logout type="button">Sair</Logout>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
