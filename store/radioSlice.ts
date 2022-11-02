import { createSlice } from '@reduxjs/toolkit';
import { TItem } from '../components/draggable-item';
import { HYDRATE } from "next-redux-wrapper";


const radioSlice = createSlice({
  name: 'radio',
  initialState: {
    valueCountItems:  '2',
    valueValues:  'A',
  },
  reducers: {
    setValueCountItems(state, { payload }) {
      state.valueCountItems = payload;
    },
    setValueValues(state, { payload }) {
        state.valueValues = payload;
      },

  },
});

export const { setValueCountItems, setValueValues } = radioSlice.actions;


export default radioSlice.reducer;