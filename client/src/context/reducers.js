import { LOGIN, LOGOUT, ADDONETOSUMMARIES , REPLACESUMMARIES} from './actions';

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
      console.log(state)
      return {
        ...state,
        user: {...state.user, 
          summaries: [...state.user.summaries, payload]}
      };
      case REPLACESUMMARIES:
        return {
          ...state,
          user: {...state.user, 
            summaries: [...payload, ]}
        };
    default:
      return state;
  }
};

export default reducers;