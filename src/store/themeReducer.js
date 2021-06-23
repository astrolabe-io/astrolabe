import { createSlice } from "@reduxjs/toolkit";
import constants from "../constants";

export const initialState = {
  currentTheme: constants.LIGHT_THEME,
};

export const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme =
        state.currentTheme === constants.LIGHT_THEME
          ? constants.DARK_THEME
          : constants.LIGHT_THEME;
    },
  },
});

export const { toggleTheme } = slice.actions;

export const selectCurrentTheme = (state) => state.theme.currentTheme;

export default slice.reducer;
