import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Content, Profile, Logout } from './styles';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

function Header() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
            <strong>{profile.name}</strong>
            <Link to="/profile">Meu Perfil</Link>
          </Profile>
          <Logout type="button" onClick={handleSignOut}>
            Sair
          </Logout>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
