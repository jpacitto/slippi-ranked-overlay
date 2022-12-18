import { configureStore } from '@reduxjs/toolkit';

import { slippiApi } from './slices/slippiSlice';

const store = configureStore({
  reducer: {
    [slippiApi.reducerPath]: slippiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([slippiApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
