import {
  LOGIN_FACEBOOK,
  LOGIN_FACEBOOK_ERROR,
  LOGIN_FACEBOOK_SUCCESS,
  LOGIN_CHROME,
  LOGIN_CHROME_SUCCESS,
  LOGIN_CHROME_ERROR,
  SET_GLOBALS,
  EMPTY_REDUCER,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  login: '',
  password: '',
  userToken: '',
  fbToken: '',
  authError: '',
  isAuthing: false,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_FACEBOOK:
      return state
          .set('isAuthing', true);
    case LOGIN_FACEBOOK_SUCCESS:
      return state
          .set('userToken', action.payload.authToken)
          .set('fbToken', action.payload.fbToken)
          .set('isAuthing', false);
    case LOGIN_FACEBOOK_ERROR:
      return state
          .set('authError', action.payload)
          .set('isAuthing', false);
    case LOGIN_CHROME:
      return state
        .set('isAuthing', true);
    case LOGIN_CHROME_SUCCESS:
      return state
        .set('userToken', action.payload.authToken)
        .set('fbToken', action.payload.fbToken)
        .set('isAuthing', false);
    case LOGIN_CHROME_ERROR:
      return state
          .set('authError', action.payload)
          .set('isAuthing', false);
    case SET_GLOBALS:
      return state.set('globals', action.payload);
    case EMPTY_REDUCER:
      return initialState;
    default:
      return state;
  }
}

export default authReducer;
