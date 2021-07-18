import { ProviderType } from '@/src/types';
import * as T from './type';

// 액션 생성함수
export const loginRequest = (provider: ProviderType, accessToken?: string, email?: string, password?: string) => ({
  type: T.LOGIN_REQUEST,
  provider,
  accessToken,
  email,
  password,
});
export const loginPrepare = () => ({ type: T.LOGIN_PREPARE });
export const loginSuccess = (user: any) => ({ type: T.LOGIN_SUCCESS, user });
export const loginFailure = (error: any) => ({ type: T.LOGIN_FAILURE, error });
export const loginCancelled = () => ({ type: T.LOGIN_CANCELLED });

export const logoutRequest = () => ({ type: T.LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: T.LOGOUT_SUCCESS });
export const logoutFailure = () => ({ type: T.LOGOUT_FAILURE });

// 초기 상태값
const initialState: T.AuthState = {
  authState: T.AuthStateType.LOGGED_OUT,
  provider: ProviderType.GOOGLE,
  accessToken: null,
};

// 리듀셔
const authenticationReducer = (state = initialState, action: T.InitActionTypes): T.AuthState => {
  switch (action.type) {
    case T.LOGIN_SUCCESS:
      return {
        ...state,
        authState: T.AuthStateType.LOGGED_IN,
        provider: action.provider,
        accessToken: action.token,
      };

    case T.LOGIN_FAILURE:
      return {
        ...state,
        authState: T.AuthStateType.LOGIN_FAILURE,
      };

    case T.LOGIN_CANCELLED:
      return {
        ...state,
        authState: T.AuthStateType.LOGIN_CANCELLED,
      };

    case T.LOGOUT_SUCCESS:
      return {
        ...state,
        authState: T.AuthStateType.LOGGED_OUT,
      };

    case T.LOGOUT_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default authenticationReducer;
