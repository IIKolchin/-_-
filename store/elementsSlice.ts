import { createSlice } from '@reduxjs/toolkit';
import { TItem } from '../types';

const elementsSlice = createSlice({
  name: 'elements',
  initialState: {
    elements: [] as TItem[],
    draggedElements: [] as TItem[],
    sortArr: [] as TItem[],
  },
  reducers: {
    setElements(state, { payload }) {
      state.elements = payload;
    },
    setDraggedElements(state, { payload }) {
      state.draggedElements = payload;
    },
    setSortArr(state, { payload }) {
      state.sortArr = payload;
    },
  },
});

export const { setElements, setDraggedElements, setSortArr } =
  elementsSlice.actions;

export default elementsSlice.reducer;
