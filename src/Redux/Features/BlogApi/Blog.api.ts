import { baseApi } from "@/Redux/api/baseApi";
export const BlogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => {
        return {
          url: `/blog/get-all-blogs`,
          method: "GET",
        };
      },
      providesTags: ["blog"],
    }),
    getBlogById: builder.query({
      query: (id) => {
        return {
          url: `/blog/get-single-blog/${id}`,
          method: "GET",
        };
      },
    }),
    updateBlog: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/blog/update-blog/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => {
        return {
          url: `/blog/delete-blog/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = BlogApi;
