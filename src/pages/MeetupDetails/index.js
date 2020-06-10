import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Banner, Container, Content, GroupButton } from './styles';

import { meetupEdit } from '~/store/modules/meetup/actions';

import api from '~/services/api';

import history from '~/services/history';

export default function MeetupDetails() {
  const meetup = useSelector((state) => state.meetup.active);
  const dispatch = useDispatch();

  function handleEdit() {
    dispatch(meetupEdit());
    history.push('/meetup');
  }

  async function handleCancel(id) {
    await api.delete(`meetups/${id}`);
    history.push('/dashboard');
  }

  return (
    <Container>
      <header>
        <h2>{meetup.title}</h2>

        <GroupButton>
          <button type="button" onClick={handleEdit}>
            Editar
          </button>
          <button type="button" onClick={() => handleCancel(meetup.id)}>
            Cancelar
          </button>
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
