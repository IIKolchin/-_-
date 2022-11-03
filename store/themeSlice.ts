import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: '1',
    imgArr: [] as string[],
  },
  reducers: {
    setTheme(state, { payload }) {
      state.theme = payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;


export default themeSlice.reducer;