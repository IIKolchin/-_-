import { createSlice } from '@reduxjs/toolkit';


const buttonsSlice = createSlice({
  name: 'radio',
  initialState: {
    isButtonAsc:  true,
    isButtonDesc:  false,
  },
  reducers: {
    setButtonAsc(state, { payload }) {
      state.isButtonAsc = payload;
    },
    setButtonDesc(state, { payload }) {
        state.isButtonDesc = payload;
      },

  },
});

export const { setButtonAsc, setButtonDesc } = buttonsSlice.actions;


export default buttonsSlice.reducer;