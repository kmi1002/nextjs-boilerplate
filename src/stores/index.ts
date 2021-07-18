import { combineReducers, Reducer, AnyAction, CombinedState } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import auth from './auth';
import { AuthState } from './auth/type';

interface RootStateInterface {
  auth: AuthState;
}

const rootReducer = (state: RootStateInterface | undefined, action: AnyAction): CombinedState<RootStateInterface> => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = { ...state, ...action.payload };

      if (state) {
        nextState.auth = state.auth;
      }
      return nextState;
    }

    default: {
      const combinedReducer = combineReducers<RootStateInterface>({
        auth,
      });

      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
