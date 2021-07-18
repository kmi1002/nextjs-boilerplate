import { applyMiddleware, createStore, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '@/stores/index';
import rootSaga from '@/sagas/index';

const debug = process.env.ENV !== 'production';

const bindMiddleware = (middleware: Middleware[]) => {
  if (debug) {
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const persistConfig = {
    key: 'nextjs',
    whitelist: ['auth'],
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, undefined, bindMiddleware([...middlewares]));
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug });
