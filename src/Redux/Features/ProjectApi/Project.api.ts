import { baseApi } from "@/Redux/api/baseApi";

export const ProjectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => {
        return {
          url: "/project/get-all-projects",
          method: "GET",
        };
      },
      providesTags: ["projects"],
    }),
    getProjectById: builder.query({
      query: (id) => {
        return {
          url: `/project/get-single-project/${id}`,
          method: "GET",
        };
      },
    }),
    updateProject: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/project/update-project/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["projects"],
    }),
    deleteProject: builder.mutation({
      query: (id) => {
        return {
          url: `/project/delete-project/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["projects"],
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = ProjectApi;
