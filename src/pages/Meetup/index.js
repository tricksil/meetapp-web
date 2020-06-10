import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { parseISO } from 'date-fns';
import { Container } from './styles';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';

import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
  banner_id: Yup.number(),
  title: Yup.string().required('Título é obrigatório'),
  description: Yup.string().required('Descrição é obrigatório'),
  date: Yup.string().required('Data é obrigatório'),
  location: Yup.string().required('Localização é obrigatório'),
});

export default function Meetup() {
  const edit = useSelector((state) => state.meetup.edit);
  const meetup = useSelector((state) => state.meetup.active);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    console.tron.log(data);
    if (edit) {
      dispatch(updateMeetupRequest(data));
    } else {
      dispatch(createMeetupRequest(data));
    }
  }

  return (
    <Container>
      <Form
        initialData={edit && { ...meetup, date: parseISO(meetup.date) }}
        schema={schema}
        onSubmit={handleSubmit}
      >
        <BannerInput name="banner_id" />

        <Input
          name="title"
          type="text"
          autoComplete="off"
          placeholder="Título do meetup"
        />
        <Input
          name="description"
          type="text"
          autoComplete="off"
          multiline
          placeholder="Descrição completa"
        />
        <DatePicker name="date" />
        <Input
          name="location"
          type="text"
          autoComplete="off"
          placeholder="Localização"
        />
        <button type="submit">Salvar meetup</button>
      </Form>
    </Container>
  );
}
