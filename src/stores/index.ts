import { combineReducers, Reducer, AnyAction, CombinedState } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import auth, { AuthState } from './auth';

interface RootStateInterface {
  auth: AuthState;
}

const rootReducer = (state: RootStateInterface | undefined, action: AnyAction): CombinedState<RootStateInterface> => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

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
