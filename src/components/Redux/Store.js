import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './Slice/SliceApi';
console.log(contactsApi);

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);
