import { LOGIN, LOGOUT, ADDONETOSUMMARIES } from './actions';

const reducers = (state, {type, payload}) => {
  switch(type) {
    case LOGIN:
      // copy
      // add new value
      // return new state
      return {
        ...state,
        user: {...payload},
        logged_in: true
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        logged_in: false
      };
    case ADDONETOSUMMARIES:
      return {
        ...state,
        user: {...user, 
          summaries: [...user.summaries, payload]}
      };
    default:
      return state;
  }
};

export default reducers;