import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  darkMode: localStorage.getItem("darkMode") === "true" ? true : false,
};

const DarkModeSlice = createSlice({
  name: "DarkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode);
      window.document.documentElement.classList.toggle("dark");
    },
  },
});

export const { toggleDarkMode } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;
