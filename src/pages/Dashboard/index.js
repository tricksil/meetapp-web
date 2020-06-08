import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useDispatch } from 'react-redux';

import { Container, Meet } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import { setMeetup, newMeetup } from '~/store/modules/meetup/actions';

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
          "dd 'de' MMMM', às' HH'h'",
          {
            locale: pt,
          }
        ),
        date: new Date(meetup.date),
      }));
      setMeetups(data);
    }
    loadMeetups();
  }, []);

  function handleDetails(meetup) {
    dispatch(setMeetup(meetup));
    history.push('/details');
  }

  function handleNewMeetup() {
    dispatch(newMeetup());
    history.push('/meetup');
  }

  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>

        <button type="button" onClick={handleNewMeetup}>
          Novo meetup
        </button>
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
