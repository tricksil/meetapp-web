import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};
export default function user(state = INITIAL_STATE, actions) {
  return produce(state, (draft) => {
    switch (actions.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = actions.payload.user;
        break;
      }

      default:
    }
  });
}
