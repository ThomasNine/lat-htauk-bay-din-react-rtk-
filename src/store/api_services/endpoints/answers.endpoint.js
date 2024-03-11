import { ApiService } from "../ApiService";

const answersEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getAnswers: builder.query({
      query: () => "/answers",
      tagTypes: ["answers"],
      providesTags: ["answers"],
    }),
  }),
});

export const { useGetAnswersQuery } = answersEndpoint;
