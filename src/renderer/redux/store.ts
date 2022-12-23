import { configureStore } from '@reduxjs/toolkit';

import { slippiApi } from './slices/slippiSlice';
import slippiTagReducer from './reducers/slippiTagReducer';

const store = configureStore({
  reducer: {
    [slippiApi.reducerPath]: slippiApi.reducer,
    slippiTagReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([slippiApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
