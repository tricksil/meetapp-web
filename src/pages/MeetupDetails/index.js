import React from 'react';
import { useSelector } from 'react-redux';

import { Banner, Container, Content, GroupButton } from './styles';

export default function MeetupDetails() {
  const meetup = useSelector((state) => state.meetup.active);
  return (
    <Container>
      <header>
        <h2>{meetup.title}</h2>

        <GroupButton>
          <button type="button">Editar</button>
          <button type="button">Cancelar</button>
        </GroupButton>
      </header>
      <Content>
        <Banner src={meetup.banner.url} alt="Banner" />
        <p>{meetup.description}</p>
        <div>
          <span>{meetup.dateFormatted}</span>
          <span>{meetup.location}</span>
        </div>
      </Content>
    </Container>
  );
}
