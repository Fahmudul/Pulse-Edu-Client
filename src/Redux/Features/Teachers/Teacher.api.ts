import { baseApi } from "@/Redux/api/baseApi";
// import { getAllTeacher } from "@/Services/Teacher";

const teacherApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTeacher: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          Object.entries(args).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              value.forEach((val) => params.append(key, val));
            } else {
              params.append(key, value as string);
            }
          });
        }
        return {
          url: "/teacher",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const { useGetAllTeacherQuery } = teacherApi;
