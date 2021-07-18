import { AuthStateType, ProviderType } from '@/src/types';

// 로그인
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_PREPARE = 'LOGIN_PREPARE';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGIN_CANCELLED = 'LOGIN_CANCELLED';

// 로그아웃
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

interface AuthState {
  // 상태
  authState: AuthStateType;

  // 인증 타입
  provider: ProviderType;

  // 엑세스 토큰
  accessToken: string | null;
}

// 초기 상태값
const initialState: AuthState = {
  authState: AuthStateType.LOGGED_OUT,
  provider: ProviderType.GOOGLE,
  accessToken: null,
};

// 리듀셔
export default (state = initialState, action: InitActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authState: AuthStateType.LOGGED_IN,
        provider: action.provider,
        accessToken: action.token,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        authState: AuthStateType.LOGIN_FAILURE,
      };

    case LOGIN_CANCELLED:
      return {
        ...state,
        authState: AuthStateType.LOGIN_CANCELLED,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        authState: AuthStateType.LOGGED_OUT,
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginPrepareAction {
  type: typeof LOGIN_PREPARE;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  provider: ProviderType;
  token: string;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
}

interface LoginCancelledAction {
  type: typeof LOGIN_CANCELLED;
}

interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST;
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

interface LogoutFailureAction {
  type: typeof LOGOUT_FAILURE;
}

type InitActionTypes =
  | LoginRequestAction
  | LoginPrepareAction
  | LoginSuccessAction
  | LoginFailureAction
  | LoginCancelledAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction;

// 액션 생성함수
export const loginRequest = (provider: ProviderType, accessToken?: string, email?: string, password?: string) => ({
  type: LOGIN_REQUEST,
  provider,
  accessToken,
  email,
  password,
});
export const loginPrepare = () => ({ type: LOGIN_PREPARE });
export const loginSuccess = (user: any) => ({ type: LOGIN_SUCCESS, user });
export const loginFailure = (error: any) => ({ type: LOGIN_FAILURE, error });
export const loginCancelled = () => ({ type: LOGIN_CANCELLED });
export const logoutRequest = () => ({ type: LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const logoutFailure = () => ({ type: LOGOUT_FAILURE });
