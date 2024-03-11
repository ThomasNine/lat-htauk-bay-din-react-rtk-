import { ApiService } from "../ApiService";

const questionsEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => "/questions",
      tagTypes: ["Questions"],
      providesTags: ["Questions"],
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsEndpoint;
