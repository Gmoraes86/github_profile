/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import requestsReducer from '../Utils/reduxUtils';
import githubReducer from './github/slice';

export interface RootStateProps {
  requestsState: ReturnType<typeof requestsReducer>;
  githubState: ReturnType<typeof githubReducer>;
}
const appReducer = combineReducers<RootStateProps>({
  requestsState: requestsReducer,
  githubState: githubReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
