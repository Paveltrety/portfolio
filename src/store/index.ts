import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { feedApi } from './api/feed';
import { localeSlice } from './modules/locale/reducer';

const rootReducer = combineReducers({
  locale: localeSlice.reducer,
  [feedApi.reducerPath]: feedApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(feedApi.middleware),
});

export default store;
