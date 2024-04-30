import {
  SET_TOKEN,
  REMOVE_TOKEN,
  RESET_AUTH,
  SET_REFRESH_TOKEN,
} from './authTypes';

interface SetTokenAction {
  type: typeof SET_TOKEN;
  payload: {token: string; expiration: number};
}

interface SetRefreshTokenAction {
  type: typeof SET_REFRESH_TOKEN;
  payload: string;
}

interface RemoveTokenAction {
  type: typeof REMOVE_TOKEN;
}

interface ResetAuthAction {
  type: typeof RESET_AUTH;
}

export type AuthActionTypes =
  | SetTokenAction
  | RemoveTokenAction
  | ResetAuthAction
  | SetRefreshTokenAction;

export const setToken = (
  token: string,
  expiration: number,
): SetTokenAction => ({
  type: SET_TOKEN,
  payload: {token, expiration},
});

export const setRefreshToken = (
  refreshToken: string,
): SetRefreshTokenAction => ({
  type: SET_REFRESH_TOKEN,
  payload: refreshToken,
});

export const removeToken = (): RemoveTokenAction => ({
  type: REMOVE_TOKEN,
});

export const resetAuth = (): ResetAuthAction => ({
  type: RESET_AUTH,
});
