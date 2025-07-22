import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICreateFeedItemParams, IFeedItem } from '@/types/feed';

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://paveltrety.ru/api/messages' }),
  endpoints: (builder) => ({
    getFeedList: builder.query<IFeedItem[], void>({
      query: () => 'list',
    }),
    createFeedItem: builder.mutation<void, ICreateFeedItemParams>({
      query: (body) => ({
        url: 'create',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetFeedListQuery, useCreateFeedItemMutation } = feedApi;
