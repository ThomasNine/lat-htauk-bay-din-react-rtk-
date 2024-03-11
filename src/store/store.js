import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "./api_services/ApiService";
import DarkModeSlice from "./global_state/DarkModeSlice";

export const store = configureStore({
  reducer: {
    DarkMode: DarkModeSlice,
    [ApiService.reducerPath]: ApiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware),
});
