import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import history from '~/services/history';

import {
  meetupFailure,
  createMeetupSuccess,
  updateMeetupSuccess,
} from './actions';

export function* createMeetup({ payload }) {
  try {
    const { banner_id, ...rest } = payload.data;
    if (!banner_id) {
      toast.error('Selecione um Banner');
      return;
    }

    const meetup = {
      banner_id,
      ...rest,
    };
    console.tron.log(meetup);
    const response = yield call(api.post, 'meetups', meetup);
    toast.success('Meetup criado com sucesso');
    yield put(createMeetupSuccess(response.data));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha ao criar meetup, verifique seus dados por favor');
    yield put(meetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { banner_id, ...rest } = payload.data;
    if (!banner_id) {
      toast.error('Selecione um Banner');
      return;
    }
    const idMeetup = yield select((state) => state.meetup.active.id);
    const meetup = {
      banner_id,
      ...rest,
    };
    const response = yield call(api.put, `/meetups/${idMeetup}`, meetup);
    toast.success('Meetup atualizado com sucesso');
    const data = {
      ...response.data,
      dateFormatted: format(
        parseISO(response.data.date),
        "dd 'de' MMMM', às' HH'h'",
        {
          locale: pt,
        }
      ),
      date: parseISO(response.data.date),
    };
    console.tron.log(data);
    yield put(updateMeetupSuccess(data));

    history.push('/details');
  } catch (error) {
    toast.error('Falha ao atualizar meetup, verifique seus dados por favor');
    console.tron.error(error);
    yield put(meetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
