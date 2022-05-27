import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://628b87577886bbbb37ba2f8c.mockapi.io/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `phonebook`,
      providesTags: result =>
        result
          ? result.map(({ id }) => ({ type: 'contacts', id }))
          : ['contacts'],
    }),
    //   providesTags: ['contacts'],
    // }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `phonebook/${id}`,
          method: 'DELETE',
        };
      },

      invalidatesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query(contact) {
        return {
          url: `phonebook/`,
          method: 'POST',
          body: contact,
        };
      },

      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
