import { baseApi } from "@/Redux/api/baseApi";
const MessageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMessages: builder.query({
      query: () => {
        return {
          url: "/message/get-all-messages",
          method: "GET",
        };
      },
    }),
    sendMessage: builder.mutation({
      query: (data) => {
        return {
          url: "/message/send-message",
          method: "POST",
          body: data,
        };
      },
    }),
    getSingleMessage: builder.query({
      query: (id) => {
        return {
          url: `/message/get-single-message/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetAllMessagesQuery,
  useSendMessageMutation,
  useGetSingleMessageQuery,
} = MessageApi;
