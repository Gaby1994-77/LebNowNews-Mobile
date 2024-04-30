import {AuthActionTypes} from './authActions';
import {
  SET_TOKEN,
  REMOVE_TOKEN,
  RESET_AUTH,
  SET_REFRESH_TOKEN,
} from './authTypes';

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  expiration: number | null;
  userData: any;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  expiration: null,
  userData: null,
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        expiration: action.payload.expiration,
      };
    case SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: null,
        refreshToken: null,
        expiration: null,
      };
    case RESET_AUTH:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
