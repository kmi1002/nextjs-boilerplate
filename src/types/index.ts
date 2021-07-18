export enum AuthStateType {
  LOGGED_IN = 'logged_in',
  LOGGED_OUT = 'logged_out',
  LOGIN_FAILURE = 'login_failure',
  LOGIN_CANCELLED = 'login_cancelled',
}

export enum AuthStatus {
  none = 'none',
  empty = 'empty',
  name = 'name',
  id = 'id',
  email = 'email',
  password = 'password',
}

export enum ProviderType {
  EMAIL = 'email',
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  APPLE = 'apple',
}
