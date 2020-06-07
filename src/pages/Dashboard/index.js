import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { useDispatch } from 'react-redux';

import { Container, Meet } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import { setMeetup } from '~/store/modules/meetup/actions';

function Dashboard() {
  const dispatch = useDispatch();
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups/organized');
      const data = response.data.map((meetup) => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date),
          "dd 'de' MMMM', às' HH'h'"
        ),
      }));
      setMeetups(data);
    }
    loadMeetups();
  }, []);

  function handleDetails(meetup) {
    dispatch(setMeetup(meetup));
    history.push('/details');
  }

  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>

        <button type="button">Novo meetup</button>
      </header>

      <ul>
        {meetups.map((meetup) => (
          <Meet key={meetup.id} onClick={() => handleDetails(meetup)}>
            <p>{meetup.title}</p>
            <time>{meetup.dateFormatted}</time>
          </Meet>
        ))}
      </ul>
    </Container>
  );
}

export default Dashboard;
