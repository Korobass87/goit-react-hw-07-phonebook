import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://628b87577886bbbb37ba2f8c.mockapi.io/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `phonebook`,
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
